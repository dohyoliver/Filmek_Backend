import { Test, TestingModule } from '@nestjs/testing';
import { FilmekController } from './filmek.controller';
import { FilmekService } from './filmek.service';

describe('FilmekController', () => {
  let controller: FilmekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmekController],
      providers: [FilmekService],
    }).compile();

    controller = module.get<FilmekController>(FilmekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
