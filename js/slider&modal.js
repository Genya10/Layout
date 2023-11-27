let slideToShow = 0;

const modalBtns = document.querySelectorAll('.modal-btn');
console.log(modalBtns)

modalBtns.forEach(function(button){
    button.addEventListener('click',function(){
    const slideNumberToShow = button.getAttribute('data-index');
    slideToShow = Number(slideNumberToShow);
    })

})

//Запуск библиотеки модального окна
MicroModal.init({
    onShow:function(){
        slider.go(slideToShow)
    }
});

//Запуск библиотеки слайдера
const sliderContainer = document.querySelector('.splide');

const slider = new Splide(sliderContainer).mount();