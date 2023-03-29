/*- mobile menu -*/
var mobBtn = document.querySelector('.menu-btn');
var mobNav = document.querySelector('.header__col-wrap');
mobBtn.addEventListener('click', function () {
  mobBtn.classList.toggle('open');
  mobNav.classList.toggle('show');
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 30,
    },
  },
});

/*- scroll-down -*/
const anchors = document.querySelectorAll('.scroll-down')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}