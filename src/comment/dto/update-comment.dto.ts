import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class UpdateCommentDto{
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
};