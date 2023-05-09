import { User } from "./User.js";
import { ProductList } from "../Product/ProductList.js";
import { Product } from "../Product/Product.js";

export class Admin extends User{

    ifAdmin: boolean = true;
    constructor(fullname: string, password: string){
        super(fullname,password);
    }

    addProduct(product: Product): void {
        ProductList.products.push
    }

    deleteProduct(product: Product): void {
        if (ProductList.products.includes(product)) {
            ProductList.products.splice(ProductList.products.indexOf(product));
        } else {
            console.log("No such product inside Products List!");
        }
    }

}