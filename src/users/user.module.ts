import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [UserController],
  providers: [AuthService, UserService,]
})
export class UserModule { }