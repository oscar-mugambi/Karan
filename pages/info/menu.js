const toggler = document.querySelector(".toggler");
const navItems = document.querySelectorAll(".nav-item");
const menu = document.querySelector(".menu")


let backButton = document.addEventListener('backbutton', function(){
  toggler.checked = false;
})


navItems.forEach(item =>{
  item.addEventListener('click', detoggle);
})



function detoggle(){
  toggler.checked = false
}


var nav1 = document.getElementById("nav1");

onscroll = function () {
  if (document.body.scrollTop > 200) {
    nav1.style.top = "0";
  } else {
    nav1.style.top = "2em";
  }
};
