const nav = document.getElementById("nav_links")
const burger = document.getElementById("burger")

function ToggleMenu() {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("crossed_line")
}

burger.addEventListener("click", ToggleMenu)