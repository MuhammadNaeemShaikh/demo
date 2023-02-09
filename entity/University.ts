import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class University  {
  @PrimaryGeneratedColumn()
  "id": number;

  @Column()
  "name": string;
}
