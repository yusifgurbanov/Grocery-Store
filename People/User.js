import { ProductList } from "../Product/ProductList.js";
import { Cart } from "../Cart.js";
import { CoupanList } from "../Coupan/CoupanList.js";
class User {
    constructor(fullname, password) {
        this._orders = [];
        User.lastId++;
        this._id = User.lastId;
        this._fullname = fullname;
        this._password = password;
        this._cart = new Cart();
        // this._cart.addProduct(new AlcoholicBeverage("Alcohol", "18+", 0.67, 1, new Date(2023 - 10 - 22)));
        // this._cart.addProduct(new BakeryProduct("Bakerrry", "Nice Bake", 3.27, 1, new Date(2023 - 10 - 22)));
        // this._cart.addProduct(new DairyProduct("Dairy", "Dairy Dairy Dairy", 0.67, 1, new Date(2023 - 10 - 22)));
        // new BakeryProduct("Bakerrry", "Nice Bake", 3.27, 1, new Date(2023 - 10 - 22)),
        // new DairyProduct("Dairy", "Dairy Dairy Dairy", 0.67, 1, new Date(2023 - 10 - 22)),
        this._discountPercentage = 0;
    }
    get id() {
        return this._id;
    }
    get fullname() {
        return this._fullname;
    }
    get password() {
        return this._password;
    }
    get cart() {
        return this._cart;
    }
    set fullname(newName) {
        this._fullname = newName;
    }
    set password(newPassword) {
        this._password = this.password;
    }
    addToCart(product) {
        this._cart.addProduct(product);
    }
    deleteFromCart(product) {
        this._cart.deleteProduct(product);
    }
    editCart(productId, amount) {
        this._cart.products.forEach(product => {
            if (product.id == productId) {
                product.amount = amount;
            }
        });
        alert("Product not found!");
    }
    applyCoupan(coupanCode) {
        CoupanList.coupans.forEach(c => {
            if (c.code === coupanCode) {
                const date = new Date();
                if (date < c.expiryDate) {
                    this._discountPercentage = c.discountPercentage;
                }
                else {
                    alert("Expirty date of this coupan has passed");
                }
            }
            else {
                alert("No Coupan Found!");
            }
        });
    }
    searchProduct(productAttribute) {
        let foundProducts = [];
        ProductList.products.forEach(p => {
            if (p.name.includes(productAttribute) ||
                p.description.includes(productAttribute) ||
                p.id.toString().includes(productAttribute) ||
                p.pricePerUnit.toString().includes(productAttribute)) {
                foundProducts.push(p);
            }
        });
        return foundProducts;
    }
}
User.lastId = 0; // static variable to keep track of the last id assigned
export { User };
