import { Module } from '@nestjs/common';
import { InstrumentosService } from './instrumentos.service';
import { InstrumentosController } from './instrumentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrumentos } from './entities/instrumentos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumentos])],
  providers: [InstrumentosService],
  controllers: [InstrumentosController],
})
export class InstrumentosModule {}
