import { IsDateString, IsNumber, IsOptional, IsString, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

export class CrateProfessorDto {
    @IsString()
    nome: string

    @IsString()
    departamento: string

    @IsNumber()
    disciplinaID: number

    @IsOptional()
    @IsDateString()
    createdAt: string

    @IsOptional()
    @IsDateString()
    updatedAt: string
}