import { GroupInviteType } from '../Model/GroupInviteType'
import { GroupUserPermission } from '../../GroupUser/Model/GroupUserPermission'

export type CreateInviteDTO = {
  originatorUuid: string
  groupUuid: string
  userUuid: string
  inviterPublicKey: string
  encryptedGroupKey: string
  inviteType: GroupInviteType
  permissions: GroupUserPermission
}