import { Product } from "./Product.js";
export class FrozenProduct extends Product {
    constructor() {
        super(...arguments);
        this.type = "Frozen";
    }
    get beverageType() {
        return this.type;
    }
}
