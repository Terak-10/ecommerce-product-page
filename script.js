const spanMinus = document.querySelector(".btn-box_span-1");
const spanPlus = document.querySelector(".btn-box_span-2");
const btnValue = document.querySelector(".btn-box-p");
const currentShopValue = document.querySelector(".span-current-shop");
const btnAddToCard = document.querySelector(".btn-box_btn-2");
const checkout = document.querySelector(".checkout");
const user = document.querySelector(".nav_user");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const calc = document.querySelector(".span-calc");
const checkOutSum = document.querySelector(".checkout_sum");
const forOneProduct = document.querySelector(".checkout_p-single");
const empty = document.querySelector(".checkout-empty");
const have = document.querySelector(".checkout_have");
const deleteOrder = document.querySelector(".checkout_trash");
const shop = document.querySelector(".nav_shop");
const actual = document.querySelector(".actual");

const product1 = document.querySelector(".product-1");
const product2 = document.querySelector(".product-2");
const product3 = document.querySelector(".product-3");
const product4 = document.querySelector(".product-4");
const thumbnailImg = document.querySelector(".bottom_img");

const bigProduct1 = document.querySelector(".big-product-1");
const bigProduct2 = document.querySelector(".big-product-2");
const bigProduct3 = document.querySelector(".big-product-3");
const bigProduct4 = document.querySelector(".big-product-4");

let currentValue = 0;
btnValue.textContent = currentValue;

let sumarry = 0;
checkOutSum.textContent = sumarry;

let calcNumber = 0;
calc.textContent = calcNumber;

let forOneProductprice = 125;
forOneProduct.textContent = `${forOneProductprice} $`;

// BUTTON ADD TO CARD 
spanMinus.addEventListener("click", function() {

    if(currentValue > 0) {
        currentValue--;
        btnValue.textContent = currentValue;
    }
});

spanPlus.addEventListener("click", function() {
    currentValue++;
    btnValue.textContent = currentValue;
});

btnAddToCard.addEventListener("click", function() {
    if(currentValue > 0) {
        currentShopValue.textContent = currentValue;
        currentShopValue.classList.remove("hidden");
        have.classList.remove("hidden");
        empty.classList.add("hidden");

        calcNumber = currentValue;
        calc.textContent = calcNumber;

        sumarry = calcNumber * forOneProductprice;
        checkOutSum.textContent = `${sumarry} $`;


    } else {
        currentShopValue.classList.add("hidden");
        
    }
});

//CHECKOUT 
const removeHidden  = function() {
    checkout.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const addHidden  = function() {
    checkout.classList.add("hidden");
    overlay.classList.add("hidden");
};

shop.addEventListener("click", removeHidden);
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if(e.key === "Escape" && !checkout.classList.contains("hidden")) {
        addHidden();
    }
});

deleteOrder.addEventListener("click", function() {
    have.classList.add("hidden");
    empty.classList.remove("hidden");
    // Tu pridať reset 

    currentValue = 0;
    btnValue.textContent = currentValue;
    currentShopValue.textContent = currentValue;
    currentShopValue.classList.add("hidden");
});

// SWITCH PRODUCT 
product1.addEventListener("click", function() {

    if(!product1.classList.contains("actual")) {
        product1.classList.add("actual");
        bigProduct1.classList.remove("hidden");
    }

    product2.classList.remove("actual");
    product3.classList.remove("actual");
    product4.classList.remove("actual");

    bigProduct2.classList.add("hidden");
    bigProduct3.classList.add("hidden");
    bigProduct4.classList.add("hidden");
    
});

product2.addEventListener("click", function() {

    if(!product2.classList.contains("actual")) {
        product2.classList.add("actual");
        bigProduct2.classList.remove("hidden");
    }

    product1.classList.remove("actual");
    product3.classList.remove("actual");
    product4.classList.remove("actual");

    bigProduct1.classList.add("hidden");
    bigProduct3.classList.add("hidden");
    bigProduct4.classList.add("hidden");
});

product3.addEventListener("click", function() {

    if(!product3.classList.contains("actual")) {
        product3.classList.add("actual");
        bigProduct3.classList.remove("hidden");
    }

    product1.classList.remove("actual");
    product2.classList.remove("actual");
    product4.classList.remove("actual");

    bigProduct1.classList.add("hidden");
    bigProduct2.classList.add("hidden");
    bigProduct4.classList.add("hidden");
});

product4.addEventListener("click", function() {

    if(!product4.classList.contains("actual")) {
        product4.classList.add("actual");
        bigProduct4.classList.remove("hidden");
    }

    product1.classList.remove("actual");
    product2.classList.remove("actual");
    product3.classList.remove("actual");

    bigProduct1.classList.add("hidden");
    bigProduct2.classList.add("hidden");
    bigProduct3.classList.add("hidden");
});
