import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PhotoEntity } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PhotoEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
