import { NextFunction, Request, Response } from "express";
import { Product } from "../models/product";
import { ProductRepository } from "../repositories/product";

export class ProductController {

    constructor() { }

    async getAllProducts(request: Request, response: Response, next: NextFunction, repository: ProductRepository) {
        return response.json({
            products: await repository.all()
        });
    }

    async subscribeProduct(request: Request, response: Response, next: NextFunction, repository: ProductRepository) {
        let item = request.body.product as Product;
        if (item) {
            let repositoryItem = await repository.findOne(item.id);
            repositoryItem.subscribed = !repositoryItem.subscribed;
            await repository.addOrUpdate(repositoryItem);
            return response.json({ product: repositoryItem });
        }
        return response.sendStatus(400);
    }
}