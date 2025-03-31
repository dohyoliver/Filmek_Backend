import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmekService } from './filmek.service';
import { CreateFilmekDto } from './dto/create-filmek.dto';
import { UpdateFilmekDto } from './dto/update-filmek.dto';

@Controller('filmek')
export class FilmekController {
  constructor(private readonly filmekService: FilmekService) {}

  @Post()
  create(@Body() createFilmekDto: CreateFilmekDto) {
    return this.filmekService.create(createFilmekDto);
  }

  @Get()
  findAll() {
    return this.filmekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmekDto: UpdateFilmekDto) {
    return this.filmekService.update(+id, updateFilmekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmekService.remove(+id);
  }
}
