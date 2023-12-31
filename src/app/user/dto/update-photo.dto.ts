/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdatePhotoDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
  url: string;  
}