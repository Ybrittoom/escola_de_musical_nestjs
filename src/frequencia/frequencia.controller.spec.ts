import { Test, TestingModule } from '@nestjs/testing';
import { FrequenciaController } from './frequencia.controller';

describe('FrequenciaController', () => {
  let controller: FrequenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequenciaController],
    }).compile();

    controller = module.get<FrequenciaController>(FrequenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
