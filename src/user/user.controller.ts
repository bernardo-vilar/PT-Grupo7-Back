import {
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import axios from 'axios';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async Create(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.create(userData);
  }
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateUserDto,
  ) {
    return await this.userService.update(id, data);
  }
}
