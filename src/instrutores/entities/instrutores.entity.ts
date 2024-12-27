import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instrutores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigo: number;

  @Column({ type: 'time' })
  hora_de_entrada: string;

  @Column({ type: 'time' })
  hora_de_saida: string;

  @Column()
  total_de_Alunos_passados: number;
}
