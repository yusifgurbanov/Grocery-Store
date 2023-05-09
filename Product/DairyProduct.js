import { Product } from "./Product.js";
export class DairyProduct extends Product {
    constructor() {
        super(...arguments);
        this.type = "Dairy";
    }
    get beverageType() {
        return this.type;
    }
}
