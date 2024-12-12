import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(avaliacaoData: CreateAvaliacaoDto) {
    // Buscar ID do professor pelo nome
    const professor = await this.prisma.professor.findUnique({
      where: { nome: avaliacaoData.professorName },
    });
    if (!professor) {
      throw new BadRequestException('Professor não encontrado.');
    }

    // Buscar ID da disciplina pelo nome
    const disciplina = await this.prisma.disciplina.findUnique({
      where: { nome: avaliacaoData.disciplinaName },
    });
    if (!disciplina) {
      throw new BadRequestException('Disciplina não encontrada.');
    }

    // Criar a avaliação
    return await this.prisma.avaliacao.create({
      data: {
        authorId: avaliacaoData.authorId,
        professorID: professor.id,
        disciplinaID: disciplina.id,
        conteudo: avaliacaoData.conteudo,
      },
    });
  }



  async findAll() {
    try {
      return await this.prisma.avaliacao.findMany();
    } catch (error) {
      throw new Error(`Error fetching all avaliacoes: ${error.message}`);
    }
  }

  async findAvaliacao(id: number) {
    try {
      return await this.prisma.avaliacao.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error fetching avaliacao with ID ${id}: ${error.message}`);
    }
  }

  async deleteAvaliacao(id: number) {
    try {
      return await this.prisma.avaliacao.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error deleting avaliacao with ID ${id}: ${error.message}`);
    }
  }

  async update(id: number, data: UpdateAvaliacaoDto) {
    try {
      return await this.prisma.avaliacao.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating avaliacao with ID ${id}: ${error.message}`);
    }
  }
}
