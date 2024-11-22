import { Injectable } from '@nestjs/common';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';

@Injectable()
export class DisciplinaService {
    constructor(private readonly prisma: PrismaService) {}

    async create(disciplinaData: CreateDisciplinaDto) {
        const disciplina = await this.prisma.disciplina.create({
            data: {
                ...disciplinaData,
            }
        });
        return disciplina;
    }

    async findAll() {
        return await this.prisma.disciplina.findMany();
    }

    async findDisciplina(id: number) {
        return await this.prisma.disciplina.findUnique({
            where: {
                id: id,
            },
        })
    }

    async deleteDisciplina(id: number) {
        return await this.prisma.disciplina.delete({
            where: {
                id: id,
            }
        })
    }

    async update(id: number, data: UpdateDisciplinaDto) {
        return await this.prisma.disciplina.update({
            where: {
                id: id
            },
            data: data,
        })
    }
}
