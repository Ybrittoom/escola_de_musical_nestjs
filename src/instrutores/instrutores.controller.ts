import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Instrutores } from './entities/instrutores.entity';
import { InstrutoresService } from './instrutores.service';

@Controller('instrutores')
export class InstrutoresController {
  constructor(private readonly instrutoresService: InstrutoresService) {}

  @Get()
  findAll(): Promise<Instrutores[]> {
    return this.instrutoresService.findAll();
  }

  @Post()
  create(@Body() instrutor: Partial<Instrutores>): Promise<Instrutores> {
    return this.instrutoresService.create(instrutor);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() instrutor: Partial<Instrutores>,
  ): Promise<Instrutores> {
    return this.instrutoresService.update(+id, instrutor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.instrutoresService.remove(+id);
  }
}
