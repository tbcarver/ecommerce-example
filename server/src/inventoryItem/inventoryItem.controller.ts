import { Controller, UseGuards, Req, Get } from '@nestjs/common';
import { InventoryItem } from './inventoryItem.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.gaurd';
import { User } from '../user/user.entity';
import { Product } from 'src/product/product.entity';
import { InventoryItemResponseDto } from './dto/inventoryItem.response.dto';
import { plainToInstance } from 'class-transformer';

@Controller('inventory')
@UseGuards(JwtAuthGuard)
export class InventoryItemController {
  constructor(
    @InjectRepository(InventoryItem)
    private readonly inventoryItemRepository: Repository<InventoryItem>,
  ) { }

  @Get()
  async getInventoryItems(@Req() req: any) {
    const product = new Product();
    product.user = new User(req.user.userId);

    const inventoryItems = await this.inventoryItemRepository.find({
      where: { product },
      relations: ['product'],
    });

    return plainToInstance(InventoryItemResponseDto, inventoryItems);
  }
}
