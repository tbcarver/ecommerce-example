import { Controller, Delete, Param, HttpException, HttpStatus, UseGuards, Post, Body, Req, Get, Res } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.gaurd';
import { User } from '../user/user.entity';
// import { PostDto } from './dto/post.dto';

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
    return products;
  }

  // @Post()
  // async createPost(@Body() postDto: PostDto, @Req() req: any) {
  //   const post = new PostEntity();
  //   post.text = postDto.text;
  //   post.title = postDto.title;
  //   post.userId = req.user.userId;
  //   await this.postRepository.save(post);
  //   return { message: 'Post created successfully.' };
  // }

  // @Delete(':id')
  // async deletePost(@Param('id') id: number, @Req() req: any) {
  //   const post = await this.postRepository.findOne({ where: { id } });
  //   if (!post) {
  //     throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  //   }
  //   if (post.userId !== req.user.userId) {
  //     throw new HttpException('You do not have permission to delete this post', HttpStatus.UNAUTHORIZED);
  //   }
  //   await this.postRepository.delete({ id });
  //   return { message: 'Post deleted successfully' };
  // }
}
