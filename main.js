// khai bao bien

let buttonMenu = document.getElementById("btn-icon");
let menu = document.getElementById("menu");
let buttonScroll = document.getElementById("btn-scroll");
let buttonScroll2 = document.getElementById("btn-scroll-2");

// them su kien

buttonMenu.addEventListener("click", barButton);
buttonScroll.addEventListener("click", scrollButton);
buttonScroll2.addEventListener("click", scrollButton2);

// function

function barButton(e) {
    e.preventDefault();
    menu.classList.toggle("active");
    if (buttonMenu) {
        buttonMenu.classList.toggle("fa-times");
    } else {
        buttonMenu.classList.remove("fa-bars");
    }
}

function scrollButton(e) {
    e.preventDefault();
    window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth",
    });
}

function scrollButton2(e) {
    e.preventDefault();
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth",
    });
}