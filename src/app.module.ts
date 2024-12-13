import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ProfessorModule } from './professor/professor.module'; // Certifique-se de importar o ProfessorModule
import { DisciplinaModule } from './disciplina/disciplina.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, CommentModule, AvaliacaoModule, ProfessorModule, DisciplinaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
