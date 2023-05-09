import { Product } from "./Product.js";


export class FrozenProduct extends Product {

    type: string = "Frozen";

    get beverageType(): string {
        return this.type;
    }

}



