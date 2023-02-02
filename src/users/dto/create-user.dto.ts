import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
@IsString()
@IsNotEmpty()
public username: string;

@IsEmail()
public mail: string;

@IsString()
@IsNotEmpty()
public password:  string

@IsString()
@IsNotEmpty()
public adress_line1: string;

@IsString()
@IsNotEmpty()
public adress_line2: string;

@IsString()
@IsNotEmpty()
public adress_line3: string;

@IsString()
@IsNotEmpty()
public zipCode: string;

@IsString()
@IsNotEmpty()
public city: string;





}

