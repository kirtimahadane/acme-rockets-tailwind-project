const initApp=()=>{
const hambergerBtn= document.getElementById("hamburger-button");
const mobileMenu= document.getElementById("mobile-menu");
const toggleMenu=()=>{
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
}
hambergerBtn.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp)