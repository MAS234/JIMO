const boton = document.querySelector(".boton");
const menu = document.querySelector(".menu");

boton.addEventListener("click",()=>{
    menu.classList.toggle("activo");
})





// CARROSEL

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });