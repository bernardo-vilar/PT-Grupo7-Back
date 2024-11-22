import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplina')
export class DisciplinaController {
    constructor(private readonly disciplnaService: DisciplinaService) {}
  
    @Post()
    async create(@Body(ValidationPipe) disciplnaData: CreateDisciplinaDto){
      return await this.disciplnaService.create(disciplnaData);
    }
  
    @Get()
    async findAll() {
      return await this.disciplnaService.findAll();
    }
  
    @Get(':id')
    async Disciplina(@Param('id', ParseIntPipe) id: number){
      return await this.disciplnaService.findDisciplina(id);
    }
  
    @Delete(':id')
    async deleteDisciplina(@Param('id', ParseIntPipe) id: number){
      return await this.disciplnaService.deleteDisciplina(id);
    }
  
    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: UpdateDisciplinaDto,){
      return await this.disciplnaService.update(id, data);
    }
}
