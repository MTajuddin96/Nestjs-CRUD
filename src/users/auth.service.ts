import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { User } from "./user.model";
import { UserService } from "./user.service";




@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
    private jwtService: JwtService
  ) { }

  async signUp(name: string, username: string, email: string, password: string) {
    const prodId = Date.now().toString()
    const newUser = new User(name, username, email, password)
    await this.userRepository.save(newUser)
    return prodId
  }



  async validateUser(email: string, pass: string): Promise<any> {
    console.log( pass)
    const user = await this.userService.findOne(email);
    // console.log(user)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  // async getAllProducts() {
  //   return await this.productRepository.find()
  // }

  // async getProductById(id: number) {
  //   console.log(id)
  //   const product = await this.productRepository.findOne({ id })
  //   return { ...product }
  // }

  // async updateProduct(id: number, title: string, desc: string, price: number) {
  //   const product = await this.productRepository.findOne({ id })
  //   const updatedProduct = { ...product }
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.desc = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }

  //   await this.productRepository.update(id, updatedProduct)
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex(p => p.id.toString() === id)
  //   const product = this.products[productIndex]
  //   if (!product) {
  //     throw new NotFoundException('Could not find product with specific id')
  //   }
  //   return [product, productIndex]
  // }
}