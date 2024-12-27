import { Module } from '@nestjs/common';
import { InstrutoresService } from './instrutores.service';
import { InstrutoresController } from './instrutores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrutores } from './entities/instrutores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrutores])],
  providers: [InstrutoresService],
  controllers: [InstrutoresController],
})
export class InstrutoresModule {}
