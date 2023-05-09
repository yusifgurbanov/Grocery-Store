class Order {
    constructor(products) {
        this._id = ++Order.lastId;
        this._products = products;
    }
    get products() {
        return this._products;
    }
    get id() {
        return this._id;
    }
    getTotalPrice() {
        let total = 0;
        this._products.forEach(prod => {
            total += prod.totalPrice;
        });
        return total;
    }
}
Order.lastId = 0;
export { Order };
