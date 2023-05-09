import { Product } from "./Product.js";
export class HygieneProduct extends Product {
    constructor() {
        super(...arguments);
        this.type = "Hygiene";
    }
    get beverageType() {
        return this.type;
    }
}
