import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    fullName: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    password?: string;
}