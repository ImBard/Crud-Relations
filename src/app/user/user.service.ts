import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveUserDto } from './dto/save-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SavePhotoDto } from './dto/save-photo.dto';
import { PhotoEntity } from './entities/photo.entity';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>,
  ) {}

  async saveUser(data: SaveUserDto): Promise<UserEntity> {
    return await this.userRepository.save(data);
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOneUser(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { id },
      relations: { photoEntity: true },
    });
  }

  async updateUser(data: UpdateUserDto): Promise<UserEntity> {
    return await this.userRepository.save(data);
  }

  async removeUser(id: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.remove(user);
  }

  async savePhoto(data: SavePhotoDto): Promise<PhotoEntity> {
    return await this.photoRepository.save(data);
  }

  async getAllPhoto(): Promise<PhotoEntity[]> {
    return await this.photoRepository.find();
  }

  async findAllPhotosByUser(id: string): Promise<PhotoEntity[]> {
    return await this.photoRepository.find({
      where: { userEntity: { id } },
    });
  }

  async findOnePhotoByUser(
    idUser: string,
    idPhoto: string,
  ): Promise<PhotoEntity> {
    return await this.photoRepository
      .createQueryBuilder()
      .where('id = :idPhoto', { idPhoto: idPhoto })
      .andWhere('userEntityId = :idUser', { idUser: idUser })
      .getOne();
  }

  async updatePhoto(data: UpdatePhotoDto): Promise<void> {
    await this.photoRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .execute();
  }

  async deleteOnePhoto(id: string): Promise<void> {
    const photo = await this.photoRepository.findOne({ where: { id } });
    await this.photoRepository.remove(photo);
  }

  async deleteAllPhotos(id: string): Promise<void> {
    const photos = await this.photoRepository.find({
      where: { userEntity: { id } },
    });

    await this.photoRepository.remove(photos);
  }
}
