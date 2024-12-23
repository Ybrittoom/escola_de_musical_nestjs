import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alunos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  instrumento: string;
}
