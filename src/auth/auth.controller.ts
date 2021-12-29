import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./localAuth.guard";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    ) { }
  @Post('signup')
  addProduct(
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ): any {
    const generatedId = this.authService.signUp(name, username, email, password)
    return {
      id: generatedId
    }
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  // @Get()
  // getAllProducts() {
  //   return this.productService.getAllProducts()
  // }

  // @Get(':id')
  // getProductById(@Param('id') prodId: number) {
  //   return this.productService.getProductById(prodId)
  // }

  // @Put(':id')
  // updateProduct(
  //   @Param('id') prodId: number,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ): any {
  //   this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice)
  //   return null
  // }
}
