import { User } from "src/users/user.model";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('')
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ default: '' })
  task: string

  @Column({ default: '' })
  date: string
  
  @Column({ default: '' })
  time: string

  @Column({ default: '' })
  priority: string

  @Column({ default: '' })
  description: string

  @Column({ default: '' })
  user: string
  
  @Column({ default: false })
  isCompleted: boolean

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  update_at: Date;
} 
