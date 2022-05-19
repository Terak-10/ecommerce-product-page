const overlay2 = document.querySelector(".overlay-2");
const productOverview = document.querySelector(".left-side");
const topImg = document.querySelector(".top_img-box");
const leftSide = document.querySelector(".left-side-box");
const leftSideClick = document.querySelector(".left-side-2");

topImg.addEventListener("click", function() {
    overlay2.classList.remove("hidden");
    leftSideClick.classList.remove("hidden");
});

overlay2.addEventListener("click", function() {
    overlay2.classList.add("hidden");
    leftSideClick.classList.add("hidden");
});