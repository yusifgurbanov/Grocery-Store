import { Product } from "./Product.js";


export class SoftDrink extends Product {

    type: string = "Soft";

    get beverageType(): string {
        return this.type;
    }

}



