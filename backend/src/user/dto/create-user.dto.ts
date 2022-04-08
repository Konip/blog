import { IsEmail, Length } from "class-validator";
import { UniqueOnDatabase } from "src/auth/validations/UniqueValidation";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @Length(5)
    fullName: string;

    @UniqueOnDatabase(User,{
        message:'Такая почта уже есть'
    })
    @IsEmail(undefined, { message: 'Неверная почта' })
    email: string;

    @Length(6, 20, { message: 'Пароль должен быть минимум 6 символов' })
    password?: string;
}
