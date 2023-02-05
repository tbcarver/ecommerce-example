import { Product } from '../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('inventory_items')
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column()
  weight: number;

  @Column()
  priceCents: number;

  @Column()
  salePriceCents: number;

  @Column()
  costCents: number;

  @Column()
  sku: string;

  @Column()
  length: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  note: string;

  constructor(id?: number) {
    this.id = id;
  }
}