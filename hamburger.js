const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_ul");
const overlay3 = document.querySelector(".overlay-3");
const closeNavUL = document.querySelector(".img-close");
const userNavUL = document.querySelector(".userNAV");


const add = function() {
    overlay3.classList.add("hidden");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeNavUL.classList.add("hidden");
    userNavUL.classList.add("hidden");
}

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay3.classList.remove("hidden");
    closeNavUL.classList.remove("hidden");
    userNavUL.classList.remove("hidden");
});

overlay3.addEventListener("click", add);
closeNavUL.addEventListener("click", add);
