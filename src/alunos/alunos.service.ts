import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alunos } from './entities/alunos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Alunos)
    private readonly alunoRepository: Repository<Alunos>,
  ) {}

  // Lista todos os alunos do negocio tlgd?
  findAll(): Promise<Alunos[]> {
    return this.alunoRepository.find();
  }

  // Cria um novo aluno no negocio blz?
  create(aluno: Partial<Alunos>): Promise<Alunos> {
    return this.alunoRepository.save(aluno);
  }

  //Esse trecho vai atualizar um aluno tendeu?
  async update(id: number, aluno: Partial<Alunos>): Promise<Alunos> {
    const existingAluno = await this.alunoRepository.findOne({ where: { id } });
    if (!existingAluno) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(existingAluno, aluno);
    return this.alunoRepository.save(existingAluno);
  }

  //remove um aluno do treco ai pdp?
  async remove(id: number): Promise<void> {
    const result = await this.alunoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
