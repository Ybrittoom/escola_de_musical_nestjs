import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Frequencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  frequencia_em_porcentagem: string;
}
