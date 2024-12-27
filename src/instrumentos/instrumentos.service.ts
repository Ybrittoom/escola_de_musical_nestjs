import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrumentos } from './entities/instrumentos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstrumentosService {
  constructor(
    @InjectRepository(Instrumentos)
    private readonly instrumentoRepository: Repository<Instrumentos>,
  ) {}

  findAll(): Promise<Instrumentos[]> {
    return this.instrumentoRepository.find();
  }

  create(instrumento: Partial<Instrumentos>): Promise<Instrumentos> {
    return this.instrumentoRepository.save(instrumento);
  }

  async update(
    id: number,
    instrumento: Partial<Instrumentos>,
  ): Promise<Instrumentos> {
    const existingInstrumento = await this.instrumentoRepository.findOne({
      where: { id },
    });
    if (!existingInstrumento) {
      throw new NotFoundException(
        `Instrumento com o id ${id} nao foi encontrado`,
      );
    }
    Object.assign(existingInstrumento, instrumento);
    return this.instrumentoRepository.save(existingInstrumento);
  }

  async remove(id: number): Promise<void> {
    const result = await this.instrumentoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Instrumento com id ${id} nao encontrado`);
    }
  }
}
