import { IsString, IsEmail, MinLength, IsOptional, IsDateString } from "class-validator";

export class CreateUserDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    senha: string;

    @IsString()
    departamento: string;

    @IsString()
    curso: string;

    @IsOptional()
    foto?: string;

    @IsOptional()
    @IsDateString()
    createdAt?: string;

    @IsOptional()
    @IsDateString()
    updatedAt?: string;
}
