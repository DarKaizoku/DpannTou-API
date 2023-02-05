import { Exclude } from 'class-transformer';
import { Service } from 'src/services/entities/service.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
@Unique(['username', 'mail'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  mail: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @Column({ type: 'varchar' })
  adress_line1: string;

  @Column({ type: 'varchar', default: '' })
  adress_line2: string;

  @Column({ type: 'varchar', default: '' })
  adress_line3: string;

  @Column({ type: 'varchar' })
  zipCode: string;

  @Column({ type: 'varchar' })
  city: string;

  @OneToMany(() => Service, (service) => service.user_id)
  @JoinColumn()
  service: number;
}
