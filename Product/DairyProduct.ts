import { Product } from "./Product.js";


export class DairyProduct extends Product {

    type: string = "Dairy";

    get beverageType(): string {
        return this.type;
    }

}



