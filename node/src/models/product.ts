import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { ProductPlan } from './productPlan';

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    features: string[];

    @OneToMany(type => ProductPlan, ProductPlan => ProductPlan.product, {
        cascade: true,
        eager: true,
    })
    plans: ProductPlan[];

    @Column({
        default: () => "false"
    })
    subscribed: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}