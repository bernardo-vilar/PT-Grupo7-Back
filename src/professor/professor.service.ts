import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para criar um professor
  async create(professorData: CreateProfessorDto) {
    return await this.prisma.professor.create({
      data: {
        nome: professorData.nome,
        departamento: professorData.departamento,
        disciplina: {
          connect: { id: professorData.disciplinaID }, // Associa a disciplina pelo ID
        },
        createdAt: new Date().toISOString(),
      },
    });
  }

  // Método para listar todos os professores
  async findAll() {
    return await this.prisma.professor.findMany({
      include: {
        disciplina: true, // Inclui a disciplina associada ao professor
      },
    });
  }

  // Método para buscar um professor específico pelo ID
  async findProfessor(id: number) {
    const professor = await this.prisma.professor.findUnique({
      where: {
        id: id,
      },
      include: {
        disciplina: true,
        avaliacoes: true, 
      },
      
    });

    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado`);
    }

    return professor;
  }

  // Método para deletar um professor pelo ID
  async deleteProfessor(id: number) {
    // Verifica se o professor existe antes de deletar
    const professor = await this.findProfessor(id);

    return await this.prisma.professor.delete({
      where: {
        id: professor.id,
      },
    });
  }

  // Método para atualizar os dados de um professor
  async update(id: number, data: UpdateProfessorDto) {
    // Verifica se o professor existe antes de atualizar
    await this.findProfessor(id);

    // Define os dados de atualização
    const updateData: any = {
      ...data,
      updatedAt: new Date().toISOString(), // Atualiza a data de modificação
    };

    if (data.disciplinaID) {
      // Se o disciplinaID for fornecido, associa a disciplina ao professor
      updateData.disciplina = { connect: { id: data.disciplinaID } };
    }

    return await this.prisma.professor.update({
      where: {
        id: id,
      },
      data: updateData,
    });
  }
}