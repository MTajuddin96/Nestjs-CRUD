import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwtAuth.guard";
import { TodoService } from "./todo.service";

@Controller('todos')
export class TodoController {
  constructor(
    private readonly todoService: TodoService) { }
  @UseGuards(JwtAuthGuard)
  @Post()
  async addTodo(
    @Body('task') task: string,
    @Body('date') date: string,
    @Body('time') time: string,
    @Body('priority') priority: string,
    @Body('isCompleted') isCompleted: boolean,
    @Body('description') description: string,
    @Body('user') user: string,
  ): Promise<any> {
    const generatedId = await this.todoService.insertTodo(task, date, time, priority, isCompleted, description, user)
    return {
      ...generatedId
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getTodoById(@Param('id') prodId: string) {
    return this.todoService.getTodoById(prodId)
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body('task') task: string,
    @Body('date') date: string,
    @Body('time') time: string,
    @Body('priority') priority: string,
    @Body('isCompleted') isCompleted: boolean,
    @Body('description') description: string,
  ): any {
    return this.todoService.updateTodo(id, task, date, time, priority, isCompleted, description)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTodo(@Param('id') prodId: string) {
    return this.todoService.deleteTodo(prodId)
  }
}

