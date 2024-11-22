import { IsNumber, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateAvaliacaoDto {
  @IsOptional()
  @IsNumber()
  authorId?: number;

  @IsOptional()
  @IsNumber()
  professorID?: number;

  @IsOptional()
  @IsNumber()
  disciplinaID?: number;

  @IsOptional()
  @IsString()
  conteudo?: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
