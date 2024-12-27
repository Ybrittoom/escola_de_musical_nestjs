import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Alunos } from './entities/alunos.entity';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunoService: AlunosService) {}

  //get
  @Get()
  findAll(): Promise<Alunos[]> {
    return this.alunoService.findAll();
  }

  //post
  @Post()
  create(@Body() aluno: Partial<Alunos>): Promise<Alunos> {
    return this.alunoService.create(aluno);
  }

  //put
  @Put(':id')
  update(
    @Param(':id') id: string,
    @Body() aluno: Partial<Alunos>,
  ): Promise<Alunos> {
    return this.alunoService.update(+id, aluno); //aqui nois converte o id pra numero moro?
  }

  //delete
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.alunoService.remove(+id); // converte o id pra numero
  }

  //aluno deletado, for chorar manda audio, SUPERAAAAAAAAAAA
}
