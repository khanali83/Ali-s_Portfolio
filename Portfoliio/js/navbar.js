const mobileMenu = document.getElementById("mobile-menu");
const navbarNav = document.querySelector(".navbar-nav");

mobileMenu.addEventListener("click", () => {
    navbarNav.classList.toggle("show");
});

