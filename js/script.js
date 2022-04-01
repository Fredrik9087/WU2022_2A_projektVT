const nav = document.getElementById("nav_links")
const burger = document.getElementById("burger")
const titles = document.getElementsByClassName('title')

function ToggleMenu() {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("crossed_line")
}

burger.addEventListener("click", ToggleMenu)


for (let i = 0; i < titles.length; i++) {
    titles[i].style.border = `solid hsl(${Math.floor(Math.random() * 361)}, ${Math.floor((Math.random() * 41)+30)}%, ${Math.floor((Math.random() * 31)+35)}%) 1px`
}