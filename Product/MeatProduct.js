import { Product } from "./Product.js";
export class MeatProduct extends Product {
    constructor() {
        super(...arguments);
        this.type = "Meat";
    }
    get beverageType() {
        return this.type;
    }
}
