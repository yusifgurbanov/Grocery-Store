import { Product } from "./Product.js";


export class MeatProduct extends Product {

    type: string = "Meat";

    get beverageType(): string {
        return this.type;
    }

}



