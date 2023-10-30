const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const headerColor = document.querySelector("header");
const navbar = document.querySelector("navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerColor.classList.toggle("active");
    navbar.classList.toggle("active");
});

