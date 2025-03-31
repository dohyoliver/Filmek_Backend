import { Injectable } from '@nestjs/common';
import { CreateFilmekDto } from './dto/create-filmek.dto';
import { UpdateFilmekDto } from './dto/update-filmek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FilmekService {
  constructor(private readonly db:PrismaService){}
  create(createFilmekDto: CreateFilmekDto) {
    const filmek = this.db.filmek.create({
      data: createFilmekDto,
    })
    return filmek;
  }

  findAll() {
    return this.db.filmek.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} filmek`;
  }

  update(id: number, updateFilmekDto: UpdateFilmekDto) {
    return `This action updates a #${id} filmek`;
  }

  remove(id: number) {
    return this.db.filmek.delete({
      where: {  id }, 
  })
}
}
