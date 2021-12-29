import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalStrategy } from "./auth.localStrategy";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { UserService } from "src/users/user.service";
import { UserEntity } from "src/users/user.entity";
import { PassportModule } from "@nestjs/passport";


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ session: true, }),
    JwtModule.register({
      secret: 'secret',
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }