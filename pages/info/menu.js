var nav1 = document.getElementById("nav1");

onscroll = function () {
  if (document.body.scrollTop > 200) {
    nav1.style.top = "0";
  } else {
    nav1.style.top = "2em";
  }
};
