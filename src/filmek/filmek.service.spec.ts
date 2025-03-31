import { Test, TestingModule } from '@nestjs/testing';
import { FilmekService } from './filmek.service';

describe('FilmekService', () => {
  let service: FilmekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmekService],
    }).compile();

    service = module.get<FilmekService>(FilmekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
