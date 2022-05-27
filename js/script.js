const nav = document.getElementById("nav_links")
const burger = document.getElementById("burger")
const titles = document.getElementsByClassName('title')
const arrow = document.getElementById("arrow")
const discNav = document.getElementById("discNav")

function ToggleMenu() {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("crossed_line")
}

burger.addEventListener("click", ToggleMenu)


for (let i = 0; i < titles.length; i++) {
    titles[i].style.border = `solid hsl(${Math.floor(Math.random() * 361)}, ${Math.floor((Math.random() * 41)+30)}%, ${Math.floor((Math.random() * 31)+35)}%) 1px`
}


function toBottom() {
    window.scrollTo(0, document.getElementById("discussionBody").scrollHeight);
}
window.onload = toBottom

function ToggleDisc() {
    discNav.classList.toggle("discNavActive")
    document.getElementById("inputDisc").classList.toggle("inputDisc")
    document.getElementById("searchHCont").classList.toggle("searchbarH")
    document.getElementById("searchbarH").classList.toggle("searchbarH")
    arrow.classList.toggle("crossedArrow")
}

arrow.addEventListener("click", ToggleDisc)