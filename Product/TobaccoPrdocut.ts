import { Product } from "./Product.js";


export class TobaccoPrdocut extends Product {

    type: string = "Tobacco";

    get beverageType(): string {
        return this.type;
    }

}



