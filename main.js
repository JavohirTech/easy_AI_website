$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  });
});


// for navbar

let hamburger = document.getElementById('hamburger');
let navbar_ = document.getElementById('navbar_');

hamburger.addEventListener('click', ()=>{
  navbar_.classList.toggle("active");
  console.log('ok');
})


