$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
    });
});

$(window).scroll(() =>{
    const scrollTop = (document).documentElement.scrollTop;

    if (scrollTop >= 10) {
      $('header').addClass('bg-blure');
    } else {
      $('header').removeClass('bg-blure');
    }
    
});

// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//     const scrollTop = document.documentElement.scrollTop;    

//     if (scrollTop >= 10) {
//       header.classList.add('bg-blure');
//     } else {
//       header.classList.remove('bg-blure');
//     }
// });