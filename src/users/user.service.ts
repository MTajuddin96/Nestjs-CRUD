import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { User } from "./user.model";




@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async findOne(email: string): Promise<any> {
    const a = await this.userRepository.findOne({ email });
    return a
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