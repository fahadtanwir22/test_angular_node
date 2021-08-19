import { createConnection, Connection } from "typeorm";
import { Product } from "../models/product";
import { ProductPlan } from "../models/productPlan";

const DatabaseConnection = async () => {
    return await createConnection({
        "type": "postgres",
        "username": "postgres",
        "database": "demodb",
        "password": "postgresPASS",
        "port": 5432,
        "host": "localhost",
        "synchronize": true,
        "entities": [
            Product,
            ProductPlan
        ],
        "migrationsTableName": "app_migrations",
        "cli": {
            "migrationsDir": "migration"
        },
        "migrations": ["src/migration/**/*.ts"],
        "connectTimeoutMS": 0
    });
}

export default class DatabaseManager {
    Connection!: Connection;

    constructor() { }

    async getDatabaseConnection() {
        if (this.Connection) return this.Connection;
        this.Connection = await DatabaseConnection();
        return this.Connection;
    }
}