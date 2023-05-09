import { Product } from "./Product.js";


export class Fruit extends Product {

     type: string = "Fruit";

    get beverageType(): string {
        return this.type;
    }

}



