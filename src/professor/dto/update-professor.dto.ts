// src/professor/dto/update-professor.dto.ts

import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProfessorDto {
  @IsOptional()
  @IsString()
  nome?: string;  // Torna opcional para atualização

  @IsOptional()
  @IsString()
  departamento?: string; // Torna opcional para atualização
  
  @IsOptional()
  @IsInt()
  disciplinaID?: number;  // Torna opcional para atualização
}
