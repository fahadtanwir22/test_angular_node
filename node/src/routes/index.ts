import express, { Router } from "express";
import { ProductRoutes } from "./product";

export default class RoutesManager {

    
    constructor() {
        this.registerRoutes();
    }

    registerRoutes(): Router {
        let router = express.Router();
        router.use('/products', new ProductRoutes().registerRoutes());
        return router;
    }
}