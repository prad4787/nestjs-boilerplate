import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsString()

    middle_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;
}