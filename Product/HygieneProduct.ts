import { Product } from "./Product.js";


export class HygieneProduct extends Product {

    type: string = "Hygiene";

    get beverageType(): string {
        return this.type;
    }

}



