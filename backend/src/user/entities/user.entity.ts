import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({ nullable: true })
    password?: string;
}