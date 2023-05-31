import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'groups' })
export class Group {
  @PrimaryGeneratedColumn('uuid')
  declare uuid: string

  @Column({
    name: 'user_uuid',
    length: 36,
  })
  @Index('index_groups_on_user_uuid')
  declare userUuid: string

  @Column({
    name: 'specified_items_key_uuid',
    length: 36,
  })
  declare specifiedItemsKeyUuid: string

  @Column({
    name: 'vault_system_identifier',
    length: 36,
  })
  declare vaultSystemIdentifier: string

  @Column({
    name: 'file_upload_bytes_used',
    type: 'bigint',
  })
  declare fileUploadBytesUsed: number

  @Column({
    name: 'file_upload_bytes_limit',
    type: 'bigint',
  })
  declare fileUploadBytesLimit: number

  @Column({
    name: 'created_at_timestamp',
    type: 'bigint',
  })
  declare createdAtTimestamp: number

  @Column({
    name: 'updated_at_timestamp',
    type: 'bigint',
  })
  declare updatedAtTimestamp: number
}
