/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { PhotoEntity } from '../entities/photo.entity';
import { UserEntity } from '../entities/user.entity';

export class SavePhotoDto {
  @IsNotEmpty()
  url: string;

  createAt: string;

  userEntity: UserEntity;

}