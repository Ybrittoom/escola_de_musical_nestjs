import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instrumentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  naipe: string;

  @Column()
  tom: string;
}
