const menu = document.querySelector(".menu");
const burger1 = document.querySelector(".burger1");
const burger2 = document.querySelector(".burger2");
const burger3 = document.querySelector(".burger3");
const rotate = document.querySelector(".navigation-chev");
const ulHide = document.querySelector(".choices");

menu.addEventListener("click", () => {
  burger1.classList.toggle("peristrofi1");
  burger2.classList.toggle("peristrofi2");

  burger3.classList.toggle("diagrafi");

  rotate.classList.toggle("rotated");
  ulHide.classList.toggle("hiden");
});
