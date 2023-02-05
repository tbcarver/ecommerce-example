import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  passwordPlain: string;

  @Column()
  superadmin: boolean;

  @Column()
  shopName: string;

  @Column()
  rememberToken: string;
  asdf
  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  cardBrand: string;

  @Column()
  cardLastFour: string;

  @Column()
  trialEndsAt: string;

  @Column()
  shopDomain: string;

  @Column()
  isEnabled: boolean;

  @Column()
  billingPlan: string;

  @Column()
  trialStartsAt: Date;

  constructor(id?: number) {
    this.id = id;
  }
}