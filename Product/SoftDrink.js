import { Product } from "./Product.js";
export class SoftDrink extends Product {
    constructor() {
        super(...arguments);
        this.type = "Soft";
    }
    get beverageType() {
        return this.type;
    }
}
