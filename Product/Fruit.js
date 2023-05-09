import { Product } from "./Product.js";
export class Fruit extends Product {
    constructor() {
        super(...arguments);
        this.type = "Fruit";
    }
    get beverageType() {
        return this.type;
    }
}
