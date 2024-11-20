import { IsString, IsEmail, MinLength, IsOptional, IsDateString } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    nome: string;


    @IsOptional()
    @IsEmail()
    email: string;

    //TIREI O UPDATE DE SENHA
    // @IsOptional()
    // @IsString()
    // @MinLength(6)
    // senha: string;

    @IsOptional()
    @IsString()
    departamento: string;

    @IsOptional()
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
