import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, ValidationPipe } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacao') // Define a rota base '/avaliacao'
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto) {
    return await this.avaliacaoService.create(avaliacaoData);
  }

  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  @Get(':id')
  async findAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAvaliacao(id);
  }

  @Get('user/:authorId')
    async findByAuthor(@Param('authorId', ParseIntPipe) authorId: number) {
    return await this.avaliacaoService.findByAuthor(authorId);
  }


  @Delete(':id')
  async deleteAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.deleteAvaliacao(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: UpdateAvaliacaoDto) {
    return await this.avaliacaoService.update(id, data);
  }
}
