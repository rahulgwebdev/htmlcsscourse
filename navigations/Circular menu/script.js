let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.onclick = function () {
  menu.classList.toggle("active");
};

let buttons = document.querySelectorAll("li");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
