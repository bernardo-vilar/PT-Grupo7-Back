import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { Prisma } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ProfessorModule } from './professor/professor.module';
import { DisciplinaModule } from './disciplina/disciplina.module';

@Module({
  imports: [UserModule, PrismaModule, CommentModule, AvaliacaoModule, ProfessorModule, DisciplinaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
