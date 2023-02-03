import {
  IsBoolean,
  IsInt,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

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
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsDateString()
  @IsNotEmpty()
  start_time: Date;
  @IsDateString()
  @IsNotEmpty()
  end_time: Date;
  @IsBoolean()
  @IsOptional()
  reserved: boolean;
}
