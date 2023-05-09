import { MeatProduct } from "../Product/MeatProduct.js";
import { BakeryProduct } from "./BakeryProduct.js";
import { Fruit } from "./Fruit.js";
import { AlcoholicBeverage } from "./AlcoholicBeverage.js";
import { DairyProduct } from "./DairyProduct.js";
import { FrozenProduct } from "./FrozenProduct.js";
import { HygieneProduct } from "./HygieneProduct.js";
import { SoftDrink } from "./SoftDrink.js";
import { Sweet } from "./Sweet.js";
import { TobaccoPrdocut } from "./TobaccoPrdocut.js";
class ProductList {
}
ProductList.products = [
    new AlcoholicBeverage("Alcohol", "18+", 0.67, 1, new Date(2023 - 10 - 22)),
    new BakeryProduct("Bakerrry", "Nice Bake", 3.27, 1, new Date(2023 - 10 - 22)),
    new DairyProduct("Dairy", "Dairy Dairy Dairy", 0.67, 1, new Date(2023 - 10 - 22)),
    new FrozenProduct("Froze", "Freeeeze ", 0.67, 1, new Date(2023 - 10 - 22)),
    new Fruit("Bunch of Fruit", "What fruit ", 0.67, 1, new Date(2023 - 10 - 22)),
    new HygieneProduct("HygieneProduct", "HygieneProduct", 0.67, 1, new Date(2023 - 10 - 22)),
    new MeatProduct("First Meat", "Nicest Meat ever", 16.52, 1, new Date(2024 - 10 - 22)),
    new SoftDrink("Soft Drink", "Soft Soft Drink", 16.52, 1, new Date(2024 - 10 - 22)),
    new Sweet("Sweet", "Very Sweet", 16.52, 1, new Date(2024 - 10 - 22)),
    new TobaccoPrdocut("TobaccoPrdocut", "Cigareettte", 16.52, 1, new Date(2024 - 10 - 22))
];
export { ProductList };
