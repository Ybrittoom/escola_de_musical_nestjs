import { Test, TestingModule } from '@nestjs/testing';
import { InstrutoresService } from './instrutores.service';

describe('InstrutoresService', () => {
  let service: InstrutoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstrutoresService],
    }).compile();

    service = module.get<InstrutoresService>(InstrutoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
