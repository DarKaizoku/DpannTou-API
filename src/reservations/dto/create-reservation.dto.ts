import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsInt()
  @IsNotEmpty()
  user_id: number;
  @IsInt()
  @IsNotEmpty()
  service_id: number;
}
