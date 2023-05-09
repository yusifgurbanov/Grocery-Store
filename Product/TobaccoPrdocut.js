import { Product } from "./Product.js";
export class TobaccoPrdocut extends Product {
    constructor() {
        super(...arguments);
        this.type = "Tobacco";
    }
    get beverageType() {
        return this.type;
    }
}
