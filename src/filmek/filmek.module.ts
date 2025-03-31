import { Module } from '@nestjs/common';
import { FilmekService } from './filmek.service';
import { FilmekController } from './filmek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FilmekController],
  providers: [FilmekService,PrismaService],
})
export class FilmekModule {}
