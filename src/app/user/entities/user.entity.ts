/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhotoEntity } from './photo.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  empresa: string;

  @Column({ nullable: false, default: 0 })
  reputacao: string;

  @OneToMany(() => PhotoEntity, (photoEntity) => photoEntity.userEntity)
  photoEntity: PhotoEntity[];
}