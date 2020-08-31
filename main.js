let buttonMenu = document.getElementById("btn-icon");
buttonMenu.addEventListener("click", barButton);
let menu = document.getElementById("menu");

function barButton(e) {
  e.preventDefault();
  menu.classList.toggle("active");
  if (buttonMenu) {
    buttonMenu.classList.toggle("fa-times");
  } else {
    buttonMenu.classList.remove("fa-bars");
  }
}
