import { Exclude, Expose, Type } from 'class-transformer';
import { ProductResponseDto } from 'src/product/dto/product.response.dto';

@Exclude()
export class InventoryItemResponseDto {
  @Expose()
  @Type(() => ProductResponseDto)
  product: ProductResponseDto;

  @Expose()
  quantity: number;

  @Expose()
  color: string;

  @Expose()
  size: string;

  @Expose()
  priceCents: number;

  @Expose()
  salePriceCents: number;

  @Expose()
  costCents: number;

  @Expose()
  sku: string;
}
