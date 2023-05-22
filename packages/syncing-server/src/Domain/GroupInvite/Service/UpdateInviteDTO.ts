import { GroupUserPermission } from '../../GroupUser/Model/GroupUserPermission'

export type UpdateInviteDTO = {
  originatorUuid: string
  inviteUuid: string
  inviterPublicKey: string
  encryptedGroupKey: string
  permissions?: GroupUserPermission
}