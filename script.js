const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("closeButton");


const mobileMenu = document.querySelector("mobileMenu");


hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
});