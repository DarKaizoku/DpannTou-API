import { Reservation } from 'src/reservations/entities/reservation.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
  @Column('numeric')
  price: number;
  @Column('varchar')
  city: string;
  @Column({ type: 'timestamp with time zone' })
  start_time: Date;
  @Column({ type: 'timestamp with time zone' })
  end_time: Date;
  @Column({ type: 'boolean', default: false })
  reserved: boolean;
}
