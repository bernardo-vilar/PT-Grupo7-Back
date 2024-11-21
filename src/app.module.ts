import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { Prisma } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, PrismaModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
