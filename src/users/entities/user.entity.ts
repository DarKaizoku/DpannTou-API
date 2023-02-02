
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';


@Entity()
export class User extends BaseEntity  {
@PrimaryGeneratedColumn()
public id!: number;

@Column({ type: 'varchar' })
public username: string;

@Column({ type: 'varchar' })
public mail: string;

@Column({ type: 'varchar'})
public password: string ;

@Column({ type: 'varchar' })
public adress_line1: string;

@Column({ type: 'varchar' })
public adress_line2: string;

@Column({ type: 'varchar' })
public adress_line3: string;

@Column({ type: 'varchar' })
public zipCode: string;

@Column({ type: 'varchar' })
public city: string;
}