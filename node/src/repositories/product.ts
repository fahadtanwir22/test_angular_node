import { getConnection, Repository } from "typeorm";
import { Product } from "../models/product";
// import { Product } from "";

export class ProductRepository {
    Repository: Repository<Product>;

    constructor() {
        this.Repository = getConnection().getRepository(Product);
    }

    async all(): Promise<Product[]> {
        return await this.Repository.find();
    }

    async total(): Promise<number> {
        return await this.Repository.count();
    }

    async findOne(id: string): Promise<Product | undefined> {
        return await this.Repository.findOne({
            id: id
        });
    }

    async remove(id: string): Promise<void> {
        let subjectProduct = await this.Repository.findOne({
            id: id
        });
        if (subjectProduct) await this.Repository.softRemove(subjectProduct);
    }

    async addOrUpdate(product: Product): Promise<Product> { 
        return await this.Repository.save(product);
    }
}