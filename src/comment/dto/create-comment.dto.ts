import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateCommentDto{
    @IsNumber()
    authorId: number

    @IsString()
    avaliacaoID: string

    @IsString()
    conteudo: string

    @IsOptional()
    @IsDateString()
    createdAt: string

    @IsOptional()
    @IsDateString()
    updatedAt: string
}