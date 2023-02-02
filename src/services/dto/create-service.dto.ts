import { IsInt } from 'class-validator';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class CreateServiceDto {
  @IsInt()
  @IsOptional()
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @IsNotEmpty()
  price: number;
  @IsDate()
  @IsOptional()
  start_time: Date;
  @IsDate()
  @IsOptional()
  end_time: Date;
  @IsBoolean()
  @IsOptional()
  reserved: boolean;
}
