import { Controller, UseGuards, Req, Get } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.gaurd';
import { Product } from './product.entity';
import { User } from '../user/user.entity';
import { ProductResponseDto } from './dto/product.response.dto';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  @Get()
  async getProducts(@Req() req: any) {
    const user = new User();
    user.id = req.user.userId;
    const products = await this.productRepository.find({ where: { user } });

    return plainToInstance(ProductResponseDto, products);
  }
}
