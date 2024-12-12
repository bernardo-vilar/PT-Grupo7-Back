import { IsString, IsNumber } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNumber()
  authorId: number;

  @IsString()
  professorName: string;

  @IsString()
  disciplinaName: string;

  @IsString()
  conteudo: string;
}
