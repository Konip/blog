import { IsEmail, Length } from "class-validator";

export class CreateUserDto {
    @Length(5)
    fullName: string;

    @IsEmail(undefined, { message: 'Неверная почта' })
    email: string;

    @Length(6, 20, { message: 'Пароль должен быть минимум 6 символов' })
    password?: string;
}
