import { InventoryItem } from '../inventoryItem/inventoryItem.entity';
import { Product } from '../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @ManyToOne(() => InventoryItem)
  @JoinColumn({ name: "inventory_item_id" })
  inventoryItem: InventoryItem;

  @Column()
  streetAddress: string;

  @Column()
  apartment: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  countryCode: string;

  @Column()
  zip: number;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  orderStatus: string;

  @Column()
  paymentRef: string;

  @Column()
  transactionId: string;

  @Column()
  paymentAmtCents: number;

  @Column()
  shipChargedCents: number;

  @Column()
  shipCostCents: number;

  @Column()
  subtotalCents: number;

  @Column()
  totalCents: number;

  @Column()
  shipperName: string;

  @Column()
  paymentDate: string;

  @Column()
  shippedDate: string;

  @Column()
  trackingNumber: string;

  @Column()
  taxTotalCents: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  constructor(id?: number) {
    this.id = id;
  }
}