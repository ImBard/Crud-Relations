/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { PhotoEntity } from "../entities/photo.entity";

export class SaveUserDto {

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  empresa: string;

  @IsNotEmpty()
  reputacao: string;

  photoEntity: PhotoEntity[];

}