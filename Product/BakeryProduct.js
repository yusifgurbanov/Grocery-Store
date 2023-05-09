import { Product } from "./Product.js";
export class BakeryProduct extends Product {
    constructor() {
        super(...arguments);
        this.type = "Bakery";
    }
    get beverageType() {
        return this.type;
    }
}
