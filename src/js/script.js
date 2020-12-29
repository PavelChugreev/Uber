const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu_show")

    menu.classList.contains("menu_show") ? hamburger.innerHTML = '<i class="fas fa-times"></i>' : hamburger.innerHTML = '<i class="fas fa-bars"></i>'
})


