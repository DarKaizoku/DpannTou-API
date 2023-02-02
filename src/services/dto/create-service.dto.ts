import {
  IsBoolean,
  IsInt,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
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
