const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .menu");
const menuBtnI = document.querySelector(".menu-btn i");
window.addEventListener("scroll", () => {
  if (scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  menuBtnI.classList.toggle("active");
});
