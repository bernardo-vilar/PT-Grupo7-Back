import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService {
    constructor(private readonly prisma: PrismaService) {}

    async create(professorData: CrateProfessorDto) {
        const professor = this.prisma.professor.create({
          data: {
            ...professorData,
            createdAt: new Date().toISOString(),
          },
        });
        return professor;
      }

async findAll() {
  return await this.prisma.professor.findMany();
}

async findProfessor(id: number) {
  return await this.prisma.professor.findUnique({
      where: {
          id: id,
      },
  })
}

async deleteProfessor(id: number) {
  return await this.prisma.professor.delete({
      where: {
          id: id,
      }
  })
}

async update(id: number, data: UpdateProfessorDto) {
  return await this.prisma.professor.update({
      where: {
          id: id
      },
      data: data,
  })
}
}