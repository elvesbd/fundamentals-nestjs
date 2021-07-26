import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { HttpCode } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
