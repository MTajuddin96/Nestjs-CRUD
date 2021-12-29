import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoEntity } from "./todo.entity";
import { Todo } from "./todo.model";


@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>
  ) { }

  async insertTodo(task: string, date: string, time: string, priority: string, isCompleted: boolean, desc: string, user: string) {
    const newTodo = new Todo(task, date, time, priority, isCompleted, desc, user)
    const todo = await this.todoRepository.save(newTodo)
    console.log(todo)
    return todo
  }

  async getAllTodos() {
    return await this.todoRepository.find()
  }

  async getTodoById(id: string) {
    console.log(id)
    const todo = await this.todoRepository.findOne({ id })
    return { ...todo }
  }

  async deleteTodo(id: string) {
    console.log(id)
    await this.todoRepository.delete({ id })
    return
  }

  async updateTodo(id: string, task: string, date: string, time: string, priority: string, isCompleted: boolean, desc: string) {
    const todo = await this.todoRepository.findOne({ id })
    const updatedTodo = { ...todo }
    if (task) {
      updatedTodo.task = task;
    }
    if (date) {
      updatedTodo.date = date;
    }
    if (time) {
      updatedTodo.time = time;
    }
    if (priority) {
      updatedTodo.priority = priority;
    }
    if (isCompleted) {
      updatedTodo.isCompleted = isCompleted;
    }
    if (desc) {
      updatedTodo.description = desc;
    }

    const todoTask = await this.todoRepository.update(id, updatedTodo)
    return todoTask
  }

  // private findTodo(id: string): [Todo, number] {
  //   const todoIndex = this.todos.findIndex(p => p.id.toString() === id)
  //   const todo = this.todos[todoIndex]
  //   if (!todo) {
  //     throw new NotFoundException('Could not find todo with specific id')
  //   }
  //   return [todo, todoIndex]
  // }
}