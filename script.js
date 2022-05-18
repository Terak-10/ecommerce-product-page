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

let currentValue = 0;
btnValue.textContent = currentValue;

let sumarry = 0;
checkOutSum.textContent = sumarry;

let calcNumber = 0;
calc.textContent = calcNumber;

let forOneProductprice = 125;
forOneProduct.textContent = `${forOneProductprice} $`;


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
});