import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class ProductResponseDto {
  @Expose()
  productName: string;

  @Expose()
  style: string;

  @Expose()
  brand: string;
}
