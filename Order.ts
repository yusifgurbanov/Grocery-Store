import { Product } from "./Product/Product.js";

export class Order {
    static lastId: number = 0;
    private _id: number;
    private _products: Array<Product>;

    constructor(products: Array<Product>) {
        this._id = ++Order.lastId;
        this._products = products;
    }

    get products(): Array<Product> {
        return this._products;
    }

    get id(): number {
        return this._id;
    }

    getTotalPrice(): number {
        let total = 0;
        this._products.forEach(prod => {
            total += prod.totalPrice;
        })
        return total;
    }
}