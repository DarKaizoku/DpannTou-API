import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import {
  IsBoolean,
  IsInt,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsString()
  @IsOptional()
  name: string;
  @IsInt()
  @IsOptional()
  price: number;
  @IsString()
  @IsOptional()
  city: string;
}
