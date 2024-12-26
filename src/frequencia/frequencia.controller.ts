import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FrequenciaService } from './frequencia.service';
import { Frequencia } from './entities/frequencia.entity';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  //get
  @Get()
  findAll(): Promise<Frequencia[]> {
    return this.frequenciaService.findAll();
  }

  //post
  @Post()
  create(@Body() frequencia: Partial<Frequencia>): Promise<Frequencia> {
    return this.frequenciaService.create(frequencia);
  }

  //put
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() frequencia: Partial<Frequencia>,
  ): Promise<Frequencia> {
    return this.frequenciaService.update(+id, frequencia);
  }

  //delete
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.frequenciaService.remove(+id);
  }
}
