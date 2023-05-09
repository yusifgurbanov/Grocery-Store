import { Product } from "./Product.js";
export class AlcoholicBeverage extends Product {
    constructor() {
        super(...arguments);
        this.type = "Alcoholic";
    }
    get beverageType() {
        return this.type;
    }
}
