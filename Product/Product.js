class Product {
    constructor(name, description, pricePerUnit, amount, expiryDate) {
        Product.idCount++;
        this._id = Product.idCount;
        this._name = name;
        this._description = description;
        this._amount = amount;
        this._pricePerUnit = pricePerUnit;
        this._expiryDate = expiryDate;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get pricePerUnit() {
        return this._pricePerUnit;
    }
    set pricePerUnit(pricePerUnit) {
        this._pricePerUnit = pricePerUnit;
    }
    get amount() {
        return this._amount;
    }
    set amount(amount) {
        this._amount = amount;
    }
    get expiryDate() {
        return this._expiryDate;
    }
    set expiryDate(expiryDate) {
        this._expiryDate = expiryDate;
    }
    get totalPrice() {
        return this.amount * this._pricePerUnit;
    }
}
Product.idCount = 0;
export { Product };
