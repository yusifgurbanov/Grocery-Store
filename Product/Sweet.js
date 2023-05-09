import { Product } from "./Product.js";
export class Sweet extends Product {
    constructor() {
        super(...arguments);
        this.type = "Sweet";
    }
    get beverageType() {
        return this.type;
    }
}
