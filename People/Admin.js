import { User } from "./User.js";
import { ProductList } from "../Product/ProductList.js";
export class Admin extends User {
    constructor(fullname, password) {
        super(fullname, password);
        this.ifAdmin = true;
    }
    addProduct(product) {
        ProductList.products.push;
    }
    deleteProduct(product) {
        if (ProductList.products.includes(product)) {
            ProductList.products.splice(ProductList.products.indexOf(product));
        }
        else {
            console.log("No such product inside Products List!");
        }
    }
}
