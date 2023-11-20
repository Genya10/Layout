let slideToShow = 0;

const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(function(button){
    button.addEventListener('click',function(){
    const slideNumberToShow = button.getAttribute('data-index');
    slideToShow = Number(slideNumberToShow);
    })

})

//Запуск библиотеки модального окна
MicroModal.init();

//Запуск библиотеки слайдера
const sliderContainer = document.querySelector('.splide');

new Splide(sliderContainer).mount();