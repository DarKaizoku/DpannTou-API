import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  username: string;

  @IsOptional()
  mail: string;

  @IsOptional()
  adress_line1: string;

  @IsOptional()
  adress_line2: string;

  @IsOptional()
  adress_line3: string;

  @IsOptional()
  zipCode: string;

  @IsOptional()
  city: string;
}
