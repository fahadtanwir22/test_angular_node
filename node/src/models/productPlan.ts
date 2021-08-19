import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Product } from './product';

@Entity()
export class ProductPlan {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    priceCents: number;

    @Column()
    currency: string;

    @Column()
    interval: string;

    @ManyToOne(type => Product, Product => Product.plans)
    product: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}