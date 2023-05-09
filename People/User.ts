import { Order } from "../Order.js";
import { Product } from "../Product/Product.js";
import { ProductList } from "../Product/ProductList.js";
import { Cart } from "../Cart.js";
import { CoupanList } from "../Coupan/CoupanList.js";


export class User {
  static lastId: number = 0; // static variable to keep track of the last id assigned
  private _id: number;
  private _fullname: string;
  private _password: string;
  private _orders: Array<Order> = [];
  private _cart: Cart;
  private _discountPercentage: number;
  constructor(fullname: string, password: string) {
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

  get id(): number {
    return this._id;
  }

  get fullname(): string {
    return this._fullname;
  }

  get password(): string {
    return this._password;
  }

  get cart(): Cart {
    return this._cart;
  }

  set fullname(newName: string) {
    this._fullname = newName;
  }

  set password(newPassword: string) {
    this._password = this.password;
  }

  addToCart(product: Product): void {
    this._cart.addProduct(product);
  }

  deleteFromCart(product: Product): void {
    this._cart.deleteProduct(product);
  }

  editCart(productId: number, amount: number): void {
    this._cart.products.forEach(product => {
      if (product.id == productId) {
        product.amount = amount;
      }
    })

    alert("Product not found!")
  }

  applyCoupan(coupanCode: string): void {
    CoupanList.coupans.forEach(c => {
      if (c.code === coupanCode) {
        const date = new Date();
        if (date < c.expiryDate) {
          this._discountPercentage = c.discountPercentage;
        } else {
          alert("Expirty date of this coupan has passed");
        }
      } else {
        alert("No Coupan Found!");
      }
    })
  }

  searchProduct(productAttribute: string): Array<Product> {
    let foundProducts: Array<Product> = [];
    ProductList.products.forEach(p => {
      if (p.name.includes(productAttribute) ||
        p.description.includes(productAttribute) ||
        p.id.toString().includes(productAttribute) ||
        p.pricePerUnit.toString().includes(productAttribute)
      ) {
        foundProducts.push(p);
      }
    })
    return foundProducts;
  }






}
