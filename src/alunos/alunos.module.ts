import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alunos } from './entities/alunos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alunos])],
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}
