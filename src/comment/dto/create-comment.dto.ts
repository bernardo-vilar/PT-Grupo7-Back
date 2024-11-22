import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateCommentDto{

    @IsNumber()
    authorId: number

    @IsNumber()
    avaliacaoID: number

    @IsString()
    conteudo: string

    @IsOptional()
    @IsDateString()
    createdAt: string

    @IsOptional()
    @IsDateString()
    updatedAt: string
}