import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { Prisma } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
