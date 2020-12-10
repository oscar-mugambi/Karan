const toggler = document.querySelector(".toggler");
const navItems = document.querySelectorAll(".nav-item");
const menu = document.querySelector(".menu");
const copyBtn = document.getElementById('copyBtn')


let backButton = document.addEventListener('backbutton', function(){
  toggler.checked = false;
})


navItems.forEach(item =>{
  item.addEventListener('click', detoggle);
})



function detoggle(){
  toggler.checked = false
}


