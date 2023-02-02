import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
  @Column('numeric')
  price: number;
  @Column('timestamp with local time zone')
  start_time: Date;
  @Column('timestamp with local time zone')
  end_time: Date;
  @Column({ type: 'boolean', default: false })
  reserved: boolean;
}
