import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fecha: string;

  @Column()
  ubicacion: string;

  @Column('decimal', { precision: 10, scale: 2 })  // Nuevo campo
  precio?: number;
}