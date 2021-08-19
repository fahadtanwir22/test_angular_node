import { Product } from "../models/product";
import { ProductPlan } from "../models/productPlan";
import { ProductRepository } from "../repositories/product";
import { ProductsData } from "./products";

export class SeedManager {

    constructor() {}

    static async isDatabaseEmpty(repository: ProductRepository): Promise<boolean> {
        const total = await repository.total();
        return total == 0 ? true : false;
    }

    static async seedDatabase(repository: ProductRepository) {
        let returnObj: Product[] = [];
        for (let index = 0; index < ProductsData.products.length; index++) {
            const element = ProductsData.products[index];
            let product: Product = new Product();
            product.name = element.name;
            product.features = element.features;
            product.plans = new Array<ProductPlan>();
            for (let indexTwo = 0; indexTwo < element.plans.length; indexTwo++) {
                const elementFeature = element.plans[indexTwo];
                let plan = new ProductPlan();
                plan.currency = elementFeature.currency;
                plan.priceCents = elementFeature.priceCents;
                plan.interval = elementFeature.interval;
                product.plans.push(plan);
            }
            returnObj = [...returnObj, await repository.addOrUpdate((product))];
        }
    }
}