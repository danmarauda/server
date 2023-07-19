import { Uuid } from '@standardnotes/domain-core'
import { SharedVault } from './SharedVault'

export interface SharedVaultRepositoryInterface {
  findByUuid(uuid: Uuid): Promise<SharedVault | null>
  findByUuids(uuids: Uuid[], lastSyncTime?: number): Promise<SharedVault[]>
  save(sharedVault: SharedVault): Promise<void>
  remove(sharedVault: SharedVault): Promise<void>
}