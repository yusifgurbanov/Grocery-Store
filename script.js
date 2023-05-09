import { Authentication } from "./Authentication.js";
import { User } from "./People/User.js";
import { ProductList } from "./Product/ProductList.js";
import { AlcoholicBeverage } from "./Product/AlcoholicBeverage.js";
import { BakeryProduct } from "./Product/BakeryProduct.js";
import { DairyProduct } from "./Product/DairyProduct.js";
import { FrozenProduct } from "./Product/FrozenProduct.js";
import { Fruit } from "./Product/Fruit.js";
import { HygieneProduct } from "./Product/HygieneProduct.js";
import { MeatProduct } from "./Product/MeatProduct.js";
import { SoftDrink } from "./Product/SoftDrink.js";
import { Sweet } from "./Product/Sweet.js";
import { TobaccoPrdocut } from "./Product/TobaccoPrdocut.js";
let loggedUser = new User("abc", "sdsd");
//localStorage.setItem('ifAdmin', 'fae');
const loginButton = document.querySelector('#loginButton');
const signupButton = document.querySelector('#signupButton');
let cartButton = document.querySelector('#cartButton');
let productsButton = document.querySelector('#productsButton');
let addProductButton = document.querySelector("#addProductButton");
let addProductTag = document.querySelector("#addingAProduct");
let totalPriceValue = document.querySelector("#totalPrice");
// Remove all event listeners from the login button
window.onload = () => {
    ProductList.products.forEach((p) => {
        addProductToHTML(p, "products-container");
    });
    totalPriceValue = document.querySelector("#totalPrice");
    cartButton = document.querySelector('#cartButton');
    productsButton = document.querySelector('#productsButton');
    addProductButton = document.querySelector("#addProductButton");
    addProductTag = document.querySelector("#addingAProduct");
    if (totalPriceValue) {
        totalPriceValue.innerHTML = "";
    }
    if (addProductTag) {
        if (localStorage.getItem('ifAdmin') == 'true') {
            addProductTag.style.display = "Block";
        }
        addProductTag.addEventListener("click", function (event) {
            event.preventDefault();
            emptyList("products-container");
            emptyList("cart-container");
            turnOnOffVisible("admin-part");
        });
    }
    if (addProductButton) {
        addProductButton.addEventListener("click", function (event) {
            event.preventDefault();
            const nameField = document.querySelector('#productname');
            const productName = nameField.value;
            const priceperunitField = document.querySelector('#priceperunit');
            const priceperunit = priceperunitField.value;
            const descriptionField = document.querySelector('#description');
            const description = descriptionField.value;
            const foodTypeSelect = document.querySelector('#product-type');
            let product;
            switch (foodTypeSelect.value) {
                case "alcoholic":
                    product = new AlcoholicBeverage(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "bakery":
                    product = new BakeryProduct(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "dairy":
                    product = new DairyProduct(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "frozen":
                    product = new FrozenProduct(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "fruits":
                    product = new Fruit(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "hygiene":
                    product = new HygieneProduct(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "meat":
                    product = new MeatProduct(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "soft":
                    product = new SoftDrink(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "sweet":
                    product = new Sweet(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                case "tobacco":
                    product = new TobaccoPrdocut(productName, description, parseInt(priceperunit), 1, new Date());
                    break;
                default:
                    alert("Something went wrong!");
                    break;
            }
            if (product) {
                ProductList.products.push(product);
                emptyList("products-container");
                ProductList.products.forEach(p => {
                    addProductToHTML(p, "products-container");
                });
            }
            turnOnOffVisible("admin-part");
        });
    }
    if (cartButton) {
        cartButton.addEventListener('click', function (event) {
            event.preventDefault();
            emptyList("products-container");
            emptyList("cart-container");
            //  turnOnOffVisible("admin-part")
            loggedUser.cart.products.forEach(p => {
                addProductToHTML(p, "cart-container");
            });
        });
    }
    if (productsButton) {
        productsButton.addEventListener('click', function (event) {
            event.preventDefault();
            emptyList("products-container");
            emptyList("cart-container");
            //    turnOnOffVisible("admin-part")
            ProductList.products.forEach(p => {
                addProductToHTML(p, "products-container");
            });
        });
    }
};
// Add the click event listener with preventDefault
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const usernameField = document.querySelector('#username');
    const passwordField = document.querySelector('#password');
    const username = usernameField.value;
    const password = passwordField.value;
    const loggedIn = Authentication.login(username, password);
    if (loggedIn === null) {
        alert("No such user exists!");
    }
    else {
        if (loggedIn.constructor.name == "Admin") {
            localStorage.setItem('ifAdmin', 'true');
            alert("Welcome Admin!");
        }
        else {
            localStorage.setItem('ifAdmin', 'false');
        }
        loggedUser = loggedIn;
        window.location.href = "Grocery.html";
        addProductTag.style.display = "block";
    }
});
signupButton === null || signupButton === void 0 ? void 0 : signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    const usernameField = document.querySelector('#newusername');
    const passwordField = document.querySelector('#newpassword');
    const username = usernameField.value;
    const password = passwordField.value;
    const loggedIn = Authentication.register(username, password);
    if (loggedIn === null) {
    }
    else {
        loggedUser = loggedIn;
        window.location.href = "Grocery.html";
        console.log(loggedUser.constructor.name);
    }
});
function addProductToHTML(product, htmlClass) {
    if (!document.getElementsByClassName(htmlClass)[0]) {
        return;
    }
    let container = document.getElementsByClassName(htmlClass)[0];
    ``;
    const productHTML = `
    <div class="product">
      <img src="${product.type}.jpg" alt="${product.name} Image">
      <div class="product-details">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.pricePerUnit.toFixed(2)}</p>
        ${htmlClass == "cart-container" ? `<p class="quantity">Quantity: ${product.amount}</p>` : ''}
       <p class="quantity">Price per unit: ${product.pricePerUnit.toFixed(2)}</p>
        ${htmlClass == "cart-container" ? `<p class="price">Total price: ${product.totalPrice.toFixed(2)}</p>` : ''}
        <p class="product-expiry">Expiry Date: ${new Date(product.expiryDate).toLocaleDateString()}</p>
        ${htmlClass == "products-container" ? ` <button class="add-to-cart-btn" data-productid="${product.id}">Add to Cart</button>` : ''}
        ${htmlClass == "cart-container" ? ` <button class="remove-from-cart-btn" data-productid="${product.id}">Remove from Cart</button>` : ''}
      </div>
    </div>
  `;
    container.innerHTML += productHTML;
    totalPriceValue.innerHTML = "Total Price:" + loggedUser.cart.getTotalPrice();
    if (htmlClass === "product-details") {
        totalPriceValue.innerHTML = "";
    }
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productid;
            const selectedProduct = findProductById(productId);
            if (selectedProduct) {
                loggedUser.addToCart(selectedProduct);
                // Display success message, update cart count, etc.
                console.log("Added to Cart");
            }
        });
    });
    const removeFromCartBtns = document.querySelectorAll('.remove-from-cart-btn');
    removeFromCartBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productid;
            const selectedProduct = findProductById(productId);
            if (selectedProduct) {
                loggedUser.deleteFromCart(selectedProduct);
                // Display success message, update cart count, etc.
                console.log("Rmove from Cart");
                emptyList("cart-container");
                loggedUser.cart.products.forEach(p => {
                    addProductToHTML(p, "cart-container");
                });
                totalPriceValue.innerHTML = "Total Price:" + loggedUser.cart.getTotalPrice();
            }
        });
    });
}
function emptyList(htmlClass) {
    if (!document.getElementsByClassName(htmlClass)[0]) {
        return;
    }
    let container = document.getElementsByClassName(htmlClass)[0];
    container.innerHTML = "";
}
function findProductById(productId) {
    for (let i = 0; i < ProductList.products.length; i++) {
        const element = ProductList.products[i];
        if (element.id.toString() == productId) {
            return element;
        }
    }
    return undefined;
}
function turnOnOffVisible(htmlClass) {
    if (!document.getElementsByClassName(htmlClass)[0]) {
        return;
    }
    let container = document.getElementsByClassName(htmlClass)[0];
    if (container.style.display == "block") {
        container.style.display = "none";
        console.log('NONE');
    }
    else {
        container.style.display = "block";
        console.log("block");
    }
}
