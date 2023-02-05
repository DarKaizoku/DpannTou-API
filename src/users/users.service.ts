import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export type TUser = any;

@Injectable()
export class UsersService {
  findOneby(username: string) {
    throw new Error('Method not implemented.');
  }
  async create(createUserDto: CreateUserDto, hash: string): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.mail = createUserDto.mail;
    user.password = hash;
    user.adress_line1 = createUserDto.adress_line1;
    user.adress_line2 = createUserDto.adress_line2;
    user.adress_line3 = createUserDto.adress_line3;
    user.zipCode = createUserDto.zipCode;
    user.city = createUserDto.city;
    await User.save(user);
    return user;
  }

  findAll() {
    return User.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
