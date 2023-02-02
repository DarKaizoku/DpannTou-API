import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
