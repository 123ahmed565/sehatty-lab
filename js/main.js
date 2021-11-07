// preloader
window.onload = function () {
  //hide the preloader
  document.querySelector('.loader_bg').style.display = "none";
};

// to top
const scrollBtn= document.querySelector(".scroll-to-top");
const upperbar =document.querySelector('.upperbar');

scrollBtn.style.display="none";

scrollBtn.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

document.addEventListener("scroll",(e)=>{
if(document.documentElement.scrollTop <=100){
  scrollBtn.style.display="none";
}else
{
  scrollBtn.style.display="block";
}
});


// swiper slider for departments
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  freeMode: true,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 2.5,
      spaceBetween: 15
  
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4.5,
      spaceBetween: 20
    },
      
  }
}); 
 
 
 
 
 // testimonials
 var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:true,
    freeMode: true,
    grabCursor:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });