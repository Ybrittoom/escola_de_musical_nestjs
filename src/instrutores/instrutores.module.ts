import { Module } from '@nestjs/common';
import { InstrutoresService } from './instrutores.service';
import { InstrutoresController } from './instrutores.controller';

@Module({
  providers: [InstrutoresService],
  controllers: [InstrutoresController]
})
export class InstrutoresModule {}
