class Cart {
    constructor() {
        this._products = [];
        Cart.idCount++;
        this._id = Cart.idCount;
    }
    get id() {
        return this._id;
    }
    get products() {
        return this._products;
    }
    addProduct(product) {
        for (let i = 0; i < this._products.length; i++) {
            const element = this._products[i];
            if (element.id === product.id) {
                this._products[i].amount++;
                return;
            }
        }
        this._products.push(product);
        console.log(this._products.length);
    }
    deleteProduct(product) {
        for (let i = 0; i < this._products.length; i++) {
            const element = this._products[i];
            console.log(element);
            if (element.id == product.id) {
                console.log(this._products);
                console.log("0000000000");
                this._products.splice(i, 1);
                console.log(this._products);
            }
        }
    }
    getTotalPrice() {
        let total = 0;
        this._products.forEach(p => {
            total = total + p.totalPrice;
        });
        return total;
    }
    emptyProducsList() {
        this._products.length = 0;
    }
}
Cart.idCount = 0;
export { Cart };
