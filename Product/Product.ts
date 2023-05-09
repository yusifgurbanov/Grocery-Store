export abstract class Product {
    private static idCount: number = 0;
    private _id: number;
    private _name: string;
    private _description: string;
    private _pricePerUnit: number;
    private _amount: number;
    private _expiryDate: Date;
    abstract type: String;

    constructor(name: string, description: string,
        pricePerUnit: number, amount: number, expiryDate: Date) {
        Product.idCount++
        this._id = Product.idCount;
        this._name = name;
        this._description = description;
        this._amount = amount;
        this._pricePerUnit = pricePerUnit;
        this._expiryDate = expiryDate;
    }
    
    get id(): number {
        return this._id;
    }


    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get pricePerUnit(): number {
        return this._pricePerUnit;
    }

    set pricePerUnit(pricePerUnit: number) {
        this._pricePerUnit = pricePerUnit;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get expiryDate(): Date {
        return this._expiryDate;
    }

    set expiryDate(expiryDate: Date) {
        this._expiryDate = expiryDate;
    }

    get totalPrice(): number {
        return this.amount * this._pricePerUnit;
    }

}

