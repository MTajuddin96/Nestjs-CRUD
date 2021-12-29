import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) { }

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
