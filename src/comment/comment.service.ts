import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
    constructor(private readonly prisma: PrismaService) {}

    async create(commentData: CreateCommentDto) {
        const comment = await this.prisma.comment.create({
            data: {
                ...commentData,
            }
        });
        return comment;
    }

    async findAll() {
        return await this.prisma.comment.findMany();
    }

    async findComment(id: number) {
        return await this.prisma.comment.findUnique({
            where: {
                id: id,
            },
        })
    }

    async deleteComment(id: number) {
        return await this.prisma.user.delete({
            where: {
                id: id,
            }
        })
    }

    async update(id: number, data: UpdateCommentDto) {
        return await this.prisma.user.update({
            where: {
                id: id
            },
            data: data,
        })
    }
}
