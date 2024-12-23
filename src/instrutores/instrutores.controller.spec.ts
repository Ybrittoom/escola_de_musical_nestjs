import { Test, TestingModule } from '@nestjs/testing';
import { InstrutoresController } from './instrutores.controller';

describe('InstrutoresController', () => {
  let controller: InstrutoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrutoresController],
    }).compile();

    controller = module.get<InstrutoresController>(InstrutoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
