//+ sliders:
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
    });
});

$(document).ready(function(){
  const promotionSlider = $("#promotionSlider").owlCarousel({
      loop: true,
      margin: 10,
      autoplay:false,
      nav: false,
      navText: [
        '',
        ''
      ],
      responsive: {
        0:{
          items:1,
          center:true,
        },
        576:{
          items:2,
        },
        768:{
          items:2,
        },
        992:{
          items:3,
        },
        1200:{
          items:4,
        },
        1400:{
          items:4,
        }
      },
  });
});

//+ nav:
const owl = $('#promotionSlider');

$('.promotion__nav-prev').click(function() {
  owl.trigger('prev.owl.carousel', [580]);
});

$('.promotion__nav-next').click(function() {
  owl.trigger('next.owl.carousel', [580]);
});

//+ Fancybox:
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//+ header:
//+ header-scroll:
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

//+ header-burger:
const burger = document.querySelector('.header__burger-wrapper'),
      adaptive = document.querySelector('.header__adaptive'),
      body = document.querySelector('body'),
      burgerLins = burger.querySelector('.header__burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('blur');
  burgerLins.classList.toggle('active');
  adaptive.classList.toggle('appearance');
  body.classList.toggle('hide');
});

//+ number change:

const btn = $('.button-first'),
      btnAnime = $('[data-anime]'),
      cards = $('.cards__card'),
      number = cards.eq(1).find('.cards__number');
      

let i = 2;
function changeNumber() {
  number.html(`0${++i}`);

  if (i == 5) {
    btn.off('click', changeNumber);
  }
}

btn.on('click', changeNumber);

// const btn = document.querySelector('.button-first'),
//       cards = document.querySelectorAll('.cards__card'),
//       number = cards[1].querySelector('.cards__number');      

// let i = 2;
// function changeNumber() {
//   number.innerHTML = `0${++i}`;

//   if (i == 5) {
//     btn.removeEventListener('click', changeNumber);
//   }
// }

// btn.addEventListener('click', changeNumber);

//+ animation:

const div = document.createElement('div');
document.querySelector('.first .container').prepend(div);
const card = document.querySelectorAll('.cards__card');

card.forEach((element, i) => {
  element.addEventListener('click', clickedCard);

  function clickedCard() {
    deleteClass();

    switch (i) {
      case 0: 
        collectingAnimations()
        break;
      case 1:
        collectingAnimations()
        break;
    }
  }
  
  function collectingAnimations() {
    
    div.classList.add('anime');
    div.style.cssText = `
                          animation-duration: 5s;
                          animation-name: cube-${i};
                        `
  }

  function deleteClass() {
    div.classList.remove('anime');
  }

});