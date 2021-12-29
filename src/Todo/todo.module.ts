import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { JwtStrategy } from "src/auth/jwt.strategy";
import { TodoController } from "./todo.controller";
import { TodoEntity } from "./todo.entity";
import { TodoService } from "./todo.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
    AuthModule
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule { }