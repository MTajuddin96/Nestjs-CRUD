import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { stringify } from 'flatted';
import { AppService } from './app.service';
import { AuthService } from './users/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }



  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
