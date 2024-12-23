import { Module } from '@nestjs/common';
import { InstrumentosService } from './instrumentos.service';
import { InstrumentosController } from './instrumentos.controller';

@Module({
  providers: [InstrumentosService],
  controllers: [InstrumentosController]
})
export class InstrumentosModule {}
