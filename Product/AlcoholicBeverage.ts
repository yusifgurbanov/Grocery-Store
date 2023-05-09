import { Product } from "./Product.js";


export class AlcoholicBeverage extends Product {

    type: string = "Alcoholic";

    get beverageType(): string {
        return this.type;
    }

}



