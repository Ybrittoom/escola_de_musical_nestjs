import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InstrumentosService } from './instrumentos.service';
import { Instrumentos } from './entities/instrumentos.entity';

@Controller('instrumentos')
export class InstrumentosController {
  constructor(private readonly instrumentosService: InstrumentosService) {}

  @Get()
  findAll(): Promise<Instrumentos[]> {
    return this.instrumentosService.findAll();
  }

  @Post()
  create(@Body() instrumento: Partial<Instrumentos>): Promise<Instrumentos> {
    return this.instrumentosService.create(instrumento);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() instrumento: Partial<Instrumentos>,
  ): Promise<Instrumentos> {
    return this.instrumentosService.update(+id, instrumento);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.instrumentosService.remove(+id);
  }
}
