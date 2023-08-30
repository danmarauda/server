import { Column, Entity, Index } from 'typeorm'

import { SQLLegacyItem } from './SQLLegacyItem'

@Entity({ name: 'items' })
export class SQLItem extends SQLLegacyItem {
  @Column({
    type: 'varchar',
    name: 'last_edited_by',
    length: 36,
    nullable: true,
  })
  declare lastEditedBy: string | null

  @Column({
    type: 'varchar',
    name: 'shared_vault_uuid',
    length: 36,
    nullable: true,
  })
  @Index('index_items_on_shared_vault_uuid')
  declare sharedVaultUuid: string | null

  @Column({
    type: 'varchar',
    name: 'key_system_identifier',
    length: 36,
    nullable: true,
  })
  declare keySystemIdentifier: string | null
}