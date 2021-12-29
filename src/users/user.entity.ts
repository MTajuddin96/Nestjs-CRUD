import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';
import * as slugify from 'slug';
import { Todo } from "src/Todo/todo.model";

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @CreateDateColumn({ type: "timestamp" })
  update_at: Date;

  @BeforeInsert()
  async hashPassword() {
    console.log('1111111111111111111111111111')
    this.password = await bcrypt.hash(this.password, 10);
  }

  // async comparePassword(attempt: string) {
  //   return await bcrypt.compare(attempt, this.password);
  // }

}











