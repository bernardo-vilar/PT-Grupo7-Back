import { IsString } from 'class-validator';

export class CreateDisciplinaDto {
  @IsString()
  nome: string;
}
