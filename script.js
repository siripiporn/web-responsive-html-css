const hamberger = document.querySelector(".hamberger");
const navMenu = document.querySelector(".nav-menu");

hamberger.addEventListener("click",() => {
    hamberger.classList.toggle("active");
    navMenu.classList.toggle("active");
})