const menuToggle = document.querySelector(".menu-toggle");
const menu = menuToggle.querySelector(".header-menu");

menuToggle.addEventListener("click", () => {
    menu.classList.add("is-active");
})