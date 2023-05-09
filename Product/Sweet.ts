import { Product } from "./Product.js";


export class Sweet extends Product {

    type: string = "Sweet";

    get beverageType(): string {
        return this.type;
    }

}



