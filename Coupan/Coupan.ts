// private String code;
//     private int discountPercentage;
//     private Date expiryDate;

export class Coupan {
    private _code: string;
    private _discountPercentage: number;
    private _expiryDate: Date;

    constructor(code: string, discountPercentage: number, expiryDate: Date) {
        this._code = code;
        this._discountPercentage = discountPercentage;
        this._expiryDate = expiryDate;
    }

    get discountPercentage(): number {
        return this._discountPercentage;
    }

    get expiryDate(): Date {
        return this._expiryDate;
    }

    get code(): string {
        return this._code;
    }

}