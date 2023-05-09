// private String code;
//     private int discountPercentage;
//     private Date expiryDate;
export class Coupan {
    constructor(code, discountPercentage, expiryDate) {
        this._code = code;
        this._discountPercentage = discountPercentage;
        this._expiryDate = expiryDate;
    }
    get discountPercentage() {
        return this._discountPercentage;
    }
    get expiryDate() {
        return this._expiryDate;
    }
    get code() {
        return this._code;
    }
}
