import { IsDateString, IsNumber, IsOptional, IsString, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

export class UpdateProfessorDto {
  @IsOptional()
  @IsString()
  nome: string

  @IsOptional()
  @IsString()
  departamento: string
  
  @IsOptional()
  @IsNumber()
  disciplinaID: number

  @IsOptional()
  @IsDateString()
  updatedAt: string
}