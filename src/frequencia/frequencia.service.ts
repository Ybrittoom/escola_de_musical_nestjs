import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Frequencia } from './entities/frequencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FrequenciaService {
  constructor(
    @InjectRepository(Frequencia)
    private readonly frequenciaRepository: Repository<Frequencia>,
  ) {}

  //listar todos as frequencias de todo os alunos
  findAll(): Promise<Frequencia[]> {
    return this.frequenciaRepository.find();
  }

  //cria uma nova frequencia de um aluno(a)
  create(frequencia: Partial<Frequencia>): Promise<Frequencia> {
    return this.frequenciaRepository.save(frequencia);
  }

  //modifica um dados de um aluno(a)
  async update(
    id: number,
    frequencia: Partial<Frequencia>,
  ): Promise<Frequencia> {
    const existingFrequencia = await this.frequenciaRepository.findOne({
      where: { id },
    });
    if (!existingFrequencia) {
      throw new NotFoundException(
        `frequencia com o id ${id} nao encontrado mane`,
      );
    }
    Object.assign(existingFrequencia, frequencia);
    return this.frequenciaRepository.save(existingFrequencia);
  }

  //remove uma frequencia de um aluno pdp?
  async remove(id: number): Promise<void> {
    const result = await this.frequenciaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Frequencia com o id ${id} nao encontrado mane`,
      );
    }
  }
}
