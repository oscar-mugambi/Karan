const toggler = document.querySelector(".toggler");
const navItems = document.querySelectorAll(".nav-item");
const menu = document.querySelector(".menu");
const copyBtn = document.getElementById("copyBtn");
const images = document.querySelectorAll("[data-image]");
const body = document.querySelector("body");

let imageArr = [...images];

// var scale = "scale(1)";
// document.body.style.webkitTransform = scale; // Chrome, Opera, Safari
// document.body.style.msTransform = scale; // IE 9
// document.body.style.transform = scale; // General

const Timer = () => {
  let current = imageArr.find((item) => item.checked);
  let nextTurn = imageArr.indexOf(current) + 1;
  current.checked = false;
  imageArr[nextTurn].checked = true;

  if (nextTurn == 4) {
    imageArr[nextTurn] = false;
    imageArr[0].checked = true;
  }
};

let backButton = document.addEventListener("backbutton", function () {
  toggler.checked = false;
});

navItems.forEach((item) => {
  item.addEventListener("click", detoggle);
});

function detoggle() {
  toggler.checked = false;
}

let interval = setInterval(Timer, 5000);
