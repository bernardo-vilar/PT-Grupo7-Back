import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: CreateUserDto) {
    const user = this.prisma.user.create({
      data: {
        ...userData, 
        createdAt: new Date().toISOString(), 
      },
    });
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findUser(id: number) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id: id } });
  }

  async update(id: number, data: UpdateUserDto) {
    const user = this.prisma.user.update({
      where: { id: id },
      data: {
        ...data,
        updatedAt: new Date().toISOString(),
      },
    });
    return user;
  }
}
