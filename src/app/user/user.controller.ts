import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SaveUserDto } from './dto/save-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { SavePhotoDto } from './dto/save-photo.dto';
import { PhotoEntity } from './entities/photo.entity';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('api/v1/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  createUser(@Body() body: SaveUserDto): Promise<UserEntity> {
    return this.userService.saveUser(body);
  }

  @Get('/user/list')
  getAllUser(): Promise<UserEntity[]> {
    return this.userService.findAllUsers();
  }

  @Get('/user/:id')
  getOneUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findOneUser(id);
  }

  @Put('/user')
  updateOneUser(
    @Body(new ValidationPipe()) body: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.updateUser(body);
  }

  @Delete('/user/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }

  @Post('/photo')
  createPhoto(@Body() body: SavePhotoDto): Promise<PhotoEntity> {
    return this.userService.savePhoto(body);
  }

  @Get('/photo/list')
  getAllPhoto(): Promise<PhotoEntity[]> {
    return this.userService.getAllPhoto();
  }

  @Get('/photo/list/:id')
  getPhotoByUser(@Param('id') id: string): Promise<PhotoEntity[]> {
    return this.userService.findAllPhotosByUser(id);
  }

  @Get('/photo/list/:idUser/:idPhoto')
  getOnePhotoByUser(
    @Param('idUser')
    idUser: string,
    @Param('idPhoto')
    idPhoto: string,
  ): Promise<PhotoEntity> {
    return this.userService.findOnePhotoByUser(idUser, idPhoto);
  }

  @Put('/photo/update')
  updatePhoto(@Body(new ValidationPipe()) body: UpdatePhotoDto): Promise<void> {
    return this.userService.updatePhoto(body);
  }

  @Delete('/photo/remove/all/:id')
  removeAllPhotos(@Param('id') id: string): Promise<void> {
    return this.userService.deleteAllPhotos(id);
  }

  @Delete('/photo/remove/:id')
  removeOnePhoto(@Param('id') id: string): Promise<void> {
    return this.userService.deleteOnePhoto(id);
  }
}
