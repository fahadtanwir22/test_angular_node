import express, { NextFunction, Request, Response, Router } from "express";
import { ProductController } from "../controllers/product";
import { ProductRepository } from "../repositories/product";

export class ProductRoutes {
    ProductController: ProductController;
    Repository: ProductRepository;


    constructor() {
        this.ProductController = new ProductController();
        this.Repository = new ProductRepository();
        this.registerRoutes();
    }

    registerRoutes(): Router {
        let router: Router = express.Router();
        router.get('/all', (request: Request, response: Response, next: NextFunction) => this.ProductController.getAllProducts(request, response, next, this.Repository));
        router.post('/subscribe', (request: Request, response: Response, next: NextFunction) => this.ProductController.subscribeProduct(request, response, next, this.Repository));
        return router;
    }
}

// export const productRoutes = (router: ) => {
//     const  = express.
//     router.get( '/api/v1/products' ,(req: Request, res, next) => {
//         return res.json({
//             success: true
//         });
//     });
//     return router;
// }