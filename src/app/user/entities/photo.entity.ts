/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @Column({ type: 'timestamp', default: null })
  deleteAt: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.photoEntity)
  userEntity: UserEntity;

  // @BeforeInsert()
  // setCreateAt() {
  //   this.createAt = new Date().toISOString();
  // }

}
