import { IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDto {
  @IsNumber()
  authorId: number;

  @IsNumber()
  professorID: number;

  @IsNumber()
  disciplinaID: number;

  @IsString()
  conteudo: string;
}
