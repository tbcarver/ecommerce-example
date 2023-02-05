import { User } from '../user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  style: string;

  @Column()
  brand: string;

  @Column()
  url: string;

  @Column()
  productType: string;

  @Column()
  shippingPrice: number;

  @Column()
  note: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  adminId: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  constructor(id?: number) {
    this.id = id;
  }
}