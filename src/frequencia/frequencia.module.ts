import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequenciaController } from './frequencia.controller';
import { Frequencia } from './entities/frequencia.entity';
import { FrequenciaService } from './frequencia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Frequencia])],
  controllers: [FrequenciaController],
  providers: [FrequenciaService],
})
export class FrequenciaModule {}
