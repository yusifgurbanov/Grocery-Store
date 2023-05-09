import { Product } from "./Product.js";


export class BakeryProduct extends Product {

    type: string = "Bakery";

    get beverageType(): string {
        return this.type;
    }

}



