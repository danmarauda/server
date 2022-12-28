import { MapperInterface, Uuid } from '@standardnotes/domain-core'
import { Repository } from 'typeorm'

import { AuthenticatorChallenge } from '../../Domain/Authenticator/AuthenticatorChallenge'
import { AuthenticatorChallengeRepositoryInterface } from '../../Domain/Authenticator/AuthenticatorChallengeRepositoryInterface'

import { TypeORMAuthenticatorChallenge } from '../TypeORM/TypeORMAuthenticatorChallenge'

export class MySQLAuthenticatorChallengeRepository implements AuthenticatorChallengeRepositoryInterface {
  constructor(
    private ormRepository: Repository<TypeORMAuthenticatorChallenge>,
    private mapper: MapperInterface<AuthenticatorChallenge, TypeORMAuthenticatorChallenge>,
  ) {}

  async findByUserUuidAndChallenge(userUuid: Uuid, challenge: Buffer): Promise<AuthenticatorChallenge | null> {
    const typeOrm = await this.ormRepository
      .createQueryBuilder('challenge')
      .where('challenge.user_uuid = :userUuid and challenge.challenge = :challenge', {
        userUuid: userUuid.value,
        challenge,
      })
      .getOne()

    if (typeOrm === null) {
      return null
    }

    return this.mapper.toDomain(typeOrm)
  }

  async save(authenticatorChallenge: AuthenticatorChallenge): Promise<void> {
    const persistence = this.mapper.toProjection(authenticatorChallenge)

    await this.ormRepository.save(persistence)
  }
}
