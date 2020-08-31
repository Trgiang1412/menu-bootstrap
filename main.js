// khai bao bien
let buttonMenu = document.getElementById("btn-icon");
let menu = document.getElementById("menu");
let buttonScroll = document.getElementById("btn-scroll");

// them su kien
buttonMenu.addEventListener("click", barButton);
buttonScroll.addEventListener("click", scrollButton);
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
    top: 500,
    left: 0,
    behavior: "smooth",
  });
}
