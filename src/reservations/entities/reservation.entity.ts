import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: number;

  @ManyToOne(() => Service, (service) => service.id, { eager: true })
  @JoinColumn()
  service_id: number;
}
