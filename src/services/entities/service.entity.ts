import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'timestamp with time zone', default: null })
  start_time: Date;
  @Column({ type: 'timestamp with time zone', default: null })
  end_time: Date;
  @Column({ type: 'boolean', default: false })
  reserved: boolean;
}
