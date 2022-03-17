// header fixed
let heightHeaderTop = document.querySelector('.header__top').clientHeight;
let headerBottom = document.querySelector('.header__bottom')

window.addEventListener('scroll', function () {
   let scrollTop = document.querySelector('html').scrollTop;

   if (scrollTop > heightHeaderTop) {
      headerBottom.classList.add('fixed')
   } else {
      headerBottom.classList.remove('fixed')
   }
})


// slider home
let $slider = $('.slider__item').flickity({
   // options
   cellAlign: 'left',
   contain: true,
   wrapAround: true,
   prevNextButtons: false,
   pageDots: false,
});
$('.slider .slider__icon .prevhome').on('click', function () {
   $slider.flickity('previous');
})
$('.slider .slider__icon .nexthome').on('click', function () {
   $slider.flickity('next');
})



// slider product
$sliderItems = document.querySelectorAll('.products__hot-slide')

let sliderCurrent = 0;

document.querySelector('.next-product').addEventListener('click', function () {

   if (sliderCurrent < $sliderItems.length - 1) {
      $sliderItems[sliderCurrent].classList.remove('active')
      $sliderItems[sliderCurrent + 1].classList.add('active')
      sliderCurrent++;
      $sliderItems.style.webkitTransition = 'all 0.4s ease - in - out'
   }
})

document.querySelector('.prev-product').addEventListener('click', function () {
   console.log('prev')
   if (sliderCurrent > 0) {
      $sliderItems[sliderCurrent].classList.remove('active')
      $sliderItems[sliderCurrent - 1].classList.add('active')
      sliderCurrent--;
   }
})

// progress 
$progressBar = document.querySelector('#process__step-bar')
$circleItems = document.querySelectorAll('.process__circle-item--content')
$circleBtn = document.querySelectorAll('.circle')

$circleBtn.forEach((e, i) => {
   e.addEventListener('click', function () {
      console.log(i)
   })
})

$circleItems.forEach((e, i) => {
   e.addEventListener('click', function () {

   })
})


// popup-video
let iframeVideo = document.querySelector('#video-iframe')
document.querySelectorAll('.icon-play').forEach((e) => {
   e.addEventListener('click', function (e) {
      let videoSrc = this.getAttribute('data-video-src')
      iframeVideo.src = "https://www.youtube.com/embed/" + videoSrc;
      document.querySelector('.popup-video').classList.add('active')
   })
})
document.querySelector('.popup-video .close').addEventListener('click', function () {
   document.querySelector('.popup-video').classList.remove('active')
   iframeVideo.src = ''
})


// paymentSlider 
function paymentSlider() {
   let $carouselGallery = $(".payment .container .payment__image");

   $carouselGallery.flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: 'left',
      lazyLoad: 7,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false
   });

   let ctrPrevGallery = $('.payment .container .payment__icon .prevcontact'),
      ctrNextGallery = $('.payment .container .payment__icon .nextcontact');

   ctrPrevGallery.on('click', function () {
      $carouselGallery.flickity('previous');
   });
   ctrNextGallery.on('click', function () {
      $carouselGallery.flickity('next');
   });
}

paymentSlider();

// cardSlide

function cardSlide() {
   let $carouselCard = $(".card .container .card__slide");

   $carouselCard.flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: 'left',
      lazyLoad: 4,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false
   });

   let ctrPrevCard = $('.card .container .card__icon .prevcard'),
      ctrNextCard = $('.card .container .card__icon .nextcard');

   ctrPrevCard.on('click', function () {
      $carouselCard.flickity('previous');
   });
   ctrNextCard.on('click', function () {
      $carouselCard.flickity('next');
   });
}

cardSlide();


// back-to-top
let $backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
   let scrollTop = window.pageYOffset;
   let heightHeader = document.querySelector('header').clientHeight;
   let heightSlider = document.querySelector('.slider').clientHeight;

   if (scrollTop > heightHeader + heightSlider) {
      $backtotop.classList.add('active')
   } else {
      $backtotop.classList.remove('active')
   }
});
$backtotop.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
})


// menu scroll active
let aMenus = document.querySelectorAll('.menu li a')
let sections = [];

aMenus.forEach((e, i) => {
   let nameSection = e.getAttribute('href').replace('#', '');
   let section = document.querySelector('.homepage > .' + nameSection);
   sections.push(section)

   e.addEventListener('click', function (event) {
      let heightHeader = document.querySelector('.header__bottom').clientHeight;
      event.preventDefault();
      window.scrollTo({
         top: section.offsetTop - heightHeader + 2,
         behavior: 'smooth'
      })
   })
})
window.addEventListener('scroll', function () {
   let heightHeader = document.querySelector('.header__bottom').clientHeight;
   let posScroll = window.pageYOffset;
   sections.forEach((section, index) => {
      if (posScroll > section.offsetTop - heightHeader) {
         aMenus.forEach(item => {
            item.classList.remove('color')
         })
         aMenus[index].classList.add('color')
      }
   })
})