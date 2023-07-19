import { Entity, Result, UniqueEntityId } from '@standardnotes/domain-core'

import { SharedVaultProps } from './SharedVaultProps'

export class SharedVault extends Entity<SharedVaultProps> {
  private constructor(props: SharedVaultProps, id?: UniqueEntityId) {
    super(props, id)
  }

  static create(props: SharedVaultProps, id?: UniqueEntityId): Result<SharedVault> {
    return Result.ok<SharedVault>(new SharedVault(props, id))
  }
}