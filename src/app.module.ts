import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrutoresModule } from './instrutores/instrutores.module';
import { InstrumentosModule } from './instrumentos/instrumentos.module';
import { FrequenciaModule } from './frequencia/frequencia.module';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      database: 'gem',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AlunosModule,
    FrequenciaModule,
    InstrumentosModule,
    InstrutoresModule,
  ],
})
export class AppModule {}
