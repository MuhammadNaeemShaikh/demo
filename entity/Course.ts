import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { University } from './University';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  "id": number;

  @Column()
  "name": string;
  
  @Column()
  "uni_id": number;
}
