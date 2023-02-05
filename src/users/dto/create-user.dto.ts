import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsPostalCode,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  passwordConfirm: string;

  @IsString()
  @IsNotEmpty()
  adress_line1: string;

  @IsString()
  @IsOptional()
  adress_line2: string;

  @IsString()
  @IsOptional()
  adress_line3: string;

  @IsString()
  @IsNotEmpty()
  @IsPostalCode('FR')
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}
