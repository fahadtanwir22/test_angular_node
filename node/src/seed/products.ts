import { Product } from "../models/product";

export const ProductsData = {
    "products": [
        {
            "name": "Silver",
            "features": [
                "Create Custom Facebook Audiences from Lists",
                "Receive a List of Rejected Addresses",
                "3 cents off per postcard",
                "25 free postcards per month"
            ],
            "plans": [
                {
                    "interval": "MONTH",
                    "priceCents": 2900,
                    "currency": "USD"
                },
                {
                    "interval": "YEAR",
                    "priceCents": 27840,
                    "currency": "USD"
                }
            ]
        },
        {
            "name": "Gold",
            "features": [
                "All Silver features",
                "7 cents off per postcard"
            ],
            "plans": [
                {
                    "interval": "YEAR",
                    "priceCents": 75840,
                    "currency": "USD"
                },
                {
                    "interval": "MONTH",
                    "priceCents": 7900,
                    "currency": "USD"
                }
            ]
        },
        {
            "name": "Enterprise",
            "features": [
                "All Platinum features",
                "12 cents off per postcard",
                "Share your discount with up to 50 additional users"
            ],
            "plans": [
                {
                    "interval": "YEAR",
                    "priceCents": 479040,
                    "currency": "USD"
                },
                {
                    "interval": "MONTH",
                    "priceCents": 49900,
                    "currency": "USD"
                }
            ]
        },
        {
            "name": "Platinum",
            "features": [
                "All Gold features",
                "10 cents off per postcard",
                "Share your discount with up to 25 additional users"
            ],
            "plans": [
                {
                    "interval": "MONTH",
                    "priceCents": 29900,
                    "currency": "USD"
                },
                {
                    "interval": "YEAR",
                    "priceCents": 287040,
                    "currency": "USD"
                }
            ]
        }
    ]
}