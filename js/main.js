
const newsSlider = document?.querySelector('.news__slider');

const swiper = new Swiper(newsSlider, {
    slidesPerView: 4,
    spaceBetween: 30,

    wrapperClass: 'news__slider-wrapper',
    slideClass: 'news__slider-slide',

    navigation: {
        nextEl: '.news__nav-next',
        prevEl: '.news__nav-prev',
        disabledClass: 'news__nav-disabled'
    },



    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 15, 
        },
        1300:{
            slidesPerView: 4,
            spaceBetween: 30,
        }
        
    }
});


const burgerBtn = document?.querySelector('#burger');
burgerBtn?.addEventListener('click', function(){
    this.classList.toggle('opened');
    document.querySelector('.header__nav').classList.toggle('header__nav--opened');
})


window.addEventListener('scroll', function(){
    if(window.pageYOffset > 150){
        document.querySelector('body').classList.add('header--fixed');
    }else{
        document.querySelector('body').classList.remove('header--fixed');    
    }
})