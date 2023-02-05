import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const checkMail = await User.findOneBy({ mail: createUserDto.mail });

    if (checkMail) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.x2 + createUserDto.mail,
      };
    }
    const checkUsername = await User.findOneBy({
      username: createUserDto.username,
    });

    if (checkUsername) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.x2 + createUserDto.username,
      };
    }
    const verifPass = createUserDto.password === createUserDto.passwordConfirm;
    if (verifPass) {
      const hash = await bcrypt.hash(createUserDto.password, 10);
      const dataUser = await this.usersService.create(createUserDto, hash);
      return {
        status: EStatus.OK,
        mesage: EMessageStatus.createdOK,
        data: dataUser,
      };
    } else {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.passwordKO,
      };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
