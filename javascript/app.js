const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .menu");
const menuBtnI = document.querySelector(".menu-btn i");
const scrollBtn = document.querySelector(".scroll-up-btn");
window.addEventListener("scroll", () => {
  if (scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if(scrollY > 500){
    scrollBtn.classList.add("active");
  }
   
  else{
    scrollBtn.classList.remove("active");
  }

  scrollBtn.addEventListener("click", () => {
       window.scrollTo(0, 0);
  });


});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  menuBtnI.classList.toggle("active");
});



$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
