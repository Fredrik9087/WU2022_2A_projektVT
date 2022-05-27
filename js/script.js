const nav = document.getElementById("nav_links")
const burger = document.getElementById("burger")
const titles = document.getElementsByClassName('title')
const arrow = document.getElementById("arrow")
const discNav = document.getElementById("discNav")

function ToggleMenu() {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("crossed_line")
}

//function ToggleDisc() {
//discNav.classList.toggle("discNavActive")
//arrow.classList.toggle("arrowCrossed")
//}

burger.addEventListener("click", ToggleMenu)
    //arrow.addEventListener("click", ToggleDisc)

for (let i = 0; i < titles.length; i++) {
    titles[i].style.border = `solid hsl(${Math.floor(Math.random() * 361)}, ${Math.floor((Math.random() * 41)+30)}%, ${Math.floor((Math.random() * 31)+35)}%) 1px`
}

function toBottom() {
    window.scrollTo(0, document.getElementById("discussionBody").scrollHeight);
}
window.onload = toBottom;