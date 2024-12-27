import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrutores } from './entities/instrutores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstrutoresService {
  constructor(
    @InjectRepository(Instrutores)
    private readonly instrutoresRepository: Repository<Instrutores>,
  ) {}

  findAll(): Promise<Instrutores[]> {
    return this.instrutoresRepository.find();
  }

  create(instrutor: Partial<Instrutores>): Promise<Instrutores> {
    return this.instrutoresRepository.save(instrutor);
  }

  async update(
    id: number,
    instrutor: Partial<Instrutores>,
  ): Promise<Instrutores> {
    const existingInstrutor = await this.instrutoresRepository.findOne({
      where: { id },
    });
    if (!existingInstrutor) {
      throw new NotFoundException(`Instrutor com id ${id} nao encontrado`);
    }
    Object.assign(existingInstrutor, instrutor);
    return this.instrutoresRepository.save(existingInstrutor);
  }

  async remove(id: number): Promise<void> {
    const result = await this.instrutoresRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Instrutor com id ${id} nao encontrado`);
    }
  }
}
