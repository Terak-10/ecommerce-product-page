const spanMinus = document.querySelector(".btn-box_span-1");
const spanPlus = document.querySelector(".btn-box_span-2");
const btnValue = document.querySelector(".btn-box-p");
const currentShopValue = document.querySelector(".span-current-shop");
const btnAddToCard = document.querySelector(".btn-box_btn-2");
const checkout = document.querySelector(".checkout");
const user = document.querySelector(".nav_user");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

let currentValue = 0;
btnValue.textContent = currentValue;


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



user.addEventListener("click", removeHidden);
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if(e.key === "Escape" && !checkout.classList.contains("hidden")) {
        addHidden();
    }
});
