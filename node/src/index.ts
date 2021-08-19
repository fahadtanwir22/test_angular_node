import express from "express";
import cors from "cors";
import RoutesManager from "./routes";
import DatabaseManager from "./database";
import { SeedManager } from "./seed";
import { getRepository } from "typeorm";
import { ProductRepository } from "./repositories/product";

class Backend {
    App: express.Application;
    // routesManager: RoutesManager;

    constructor() {
        this.App = express();
        this.configureApp();
    }

    async configureApp() {
        // Database Setup
        const dbManager = new DatabaseManager();
        await dbManager.getDatabaseConnection();
        const repo = new ProductRepository();
        // Seeder check
        if(await SeedManager.isDatabaseEmpty(repo)) await SeedManager.seedDatabase(repo);


        // await this.DatabaseConnection.connect();
        // Setup body parser
        // parse application/x-www-form-urlencoded
        this.App.use(express.urlencoded({
            extended: true
        }));
        // parse application/json
        this.App.use(express.json({}))

        // Setup cors
        this.App.use(cors({
            origin: '*'
        }));

        // Setup routes
        this.App.use(`/api` ,new RoutesManager().registerRoutes());

        this.App.listen(3000, this.onAppListen);

    }

    onAppListen() {
        console.log("Server is listening on port: 3000.");
    }
}

export default new Backend();

