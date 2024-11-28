import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class UpdateCommentDto{
    @IsOptional()
    @IsNumber()
    authorId: number

    @IsOptional()
    @IsNumber()
    avaliacaoID: number

    @IsOptional()
    @IsString()
    conteudo: string

};