import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrumentos } from './entities/instrumentos.entity';

@Injectable()
export class InstrumentosService {
    constructor(
        @InjectRepository(Instrumentos)
        
    )
}
