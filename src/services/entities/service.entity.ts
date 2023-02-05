import { Reservation } from 'src/reservations/entities/reservation.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @OneToMany(() => Reservation, (reservation) => reservation.id)
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
  @ManyToOne(() => User, (user) => user.id, { eager: true })
  user_id: number;
}
