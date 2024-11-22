import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
export class UpdateCommentDto{
    @IsOptional()
    @IsNumber()
    authorId: number

    @IsOptional()
    @IsString()
    avaliacaoID: number

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