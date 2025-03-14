import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUSer.dto';
import {  UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: hash
    })
  }

  async getAllUsers(){
    return this.userRepository.find()
  }
}
