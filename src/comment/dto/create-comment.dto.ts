import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateCommentDto{
    @IsOptional()
    @IsNumber()
    authorId: number

    @IsOptional()
    @IsString()
    avaliacaoID: string

    @IsOptional()
    @IsString()
    conteudo: string

    @IsOptional()
    @IsDateString()
    createdAt: string

    @IsOptional()
    @IsDateString()
    updatedAt: string
}