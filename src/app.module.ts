import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmekModule } from './filmek/filmek.module';

@Module({
  imports: [FilmekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
