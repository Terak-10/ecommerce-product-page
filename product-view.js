const overlay2 = document.querySelector(".overlay-2");
const topImg = document.querySelector(".top_img-box");
const leftSideClick = document.querySelector(".left-side-2");
const close = document.querySelector(".left-side-2_close");
const topIMG_preview = document.querySelector(".top-2_img");

const product1_2 = document.querySelector(".product-1-2");
const product2_2 = document.querySelector(".product-2-2");
const product3_2 = document.querySelector(".product-3-2");
const product4_2 = document.querySelector(".product-4-2");
 

const bigProduct1_2 = document.querySelector(".big-product-1-2");
const bigProduct2_2 = document.querySelector(".big-product-2-2");
const bigProduct3_2 = document.querySelector(".big-product-3-2");
const bigProduct4_2 = document.querySelector(".big-product-4-2");
 



topImg.addEventListener("click", function() {
    overlay2.classList.remove("hidden");
    leftSideClick.classList.remove("hidden");
});

overlay2.addEventListener("click", function() {
    overlay2.classList.add("hidden");
    leftSideClick.classList.add("hidden");
});


close.addEventListener("click", function() {
    leftSideClick.classList.add("hidden");
    overlay2.classList.add("hidden");
});


//////////////// SWITCH


    product1_2.addEventListener("click", function() {

        if(!product1_2.classList.contains("actual-2")) {
            product1_2.classList.add("actual-2");
            bigProduct1_2.classList.remove("hidden");
        }
    
        product2_2.classList.remove("actual-2");
        product3_2.classList.remove("actual-2");
        product4_2.classList.remove("actual-2");
    
        bigProduct2_2.classList.add("hidden");
        bigProduct3_2.classList.add("hidden");
        bigProduct4_2.classList.add("hidden");
        
    });
    
    product2_2.addEventListener("click", function() {
    
        if(!product2_2.classList.contains("actual-2")) {
            product2_2.classList.add("actual-2");
            bigProduct2_2.classList.remove("hidden");
        }
    
        product1_2.classList.remove("actual-2");
        product3_2.classList.remove("actual-2");
        product4_2.classList.remove("actual-2");
    
        bigProduct1_2.classList.add("hidden");
        bigProduct3_2.classList.add("hidden");
        bigProduct4_2.classList.add("hidden");
    });
    
    product3_2.addEventListener("click", function() {
    
        if(!product3_2.classList.contains("actual-2")) {
            product3_2.classList.add("actual-2");
            bigProduct3_2.classList.remove("hidden");
        }
    
        product1_2.classList.remove("actual-2");
        product2_2.classList.remove("actual-2");
        product4_2.classList.remove("actual-2");
    
        bigProduct1_2.classList.add("hidden");
        bigProduct2_2.classList.add("hidden");
        bigProduct4_2.classList.add("hidden");
    });
    
    product4_2.addEventListener("click", function() {
    
        if(!product4_2.classList.contains("actual-2")) {
            product4_2.classList.add("actual-2");
            bigProduct4_2.classList.remove("hidden");
        }
    
        product1_2.classList.remove("actual-2");
        product2_2.classList.remove("actual-2");
        product3_2.classList.remove("actual-2");
    
        bigProduct1_2.classList.add("hidden");
        bigProduct2_2.classList.add("hidden");
        bigProduct3_2.classList.add("hidden");
    });