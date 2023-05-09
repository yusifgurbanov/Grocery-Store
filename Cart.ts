import { Product } from "./Product/Product.js";
import { AlcoholicBeverage } from "./Product/AlcoholicBeverage.js";
import { BakeryProduct } from "./Product/BakeryProduct.js";
import { DairyProduct } from "./Product/DairyProduct.js";

export class Cart {
    static idCount: number = 0;
    private _id: number;
    private _products: Array<Product> = [];

    constructor() {
        Cart.idCount++;
        this._id = Cart.idCount;
    }

    get id(): number {
        return this._id;
    }

    get products(): Array<Product> {
        return this._products;
    }

    addProduct(product: Product): void {
        for (let i = 0; i < this._products.length; i++) {
            const element = this._products[i];
            if (element.id === product.id) {
                this._products[i].amount++;
                return;
            }

        }
        this._products.push(product);
        console.log(this._products.length)
    }

    deleteProduct(product: Product): void {
        for (let i = 0; i < this._products.length; i++) {
            const element = this._products[i];
            console.log(element)
            if (element.id == product.id) {
                console.log(this._products)
                console.log("0000000000")
                this._products.splice(i, 1);
                console.log(this._products)
            }

        }
    }

    getTotalPrice(): number {
        let total = 0;
        this._products.forEach(p => {
            total = total + p.totalPrice;
        })
        return total;
    }

    emptyProducsList(): void {
        this._products.length = 0;
    }


}


