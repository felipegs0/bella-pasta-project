const slides = document.querySelectorAll('.slides');
const dotContainer = document.querySelector('.dots')
const left = document.querySelector(".left")
const right = document.querySelector(".right")

let slide = 0;
const maxSlide = slides.length

const goToSlide = (slide) => {
    slides.forEach(
        (e, i) => (e.style.transform = `translateX(${100 * (i - slide)}%`)
    );
};

const nextSlide = () => {
    if(slide === maxSlide - 3){
        slide = 0;
    }else{
        slide++
    }
    goToSlide(slide)
}

const prevSlide = () => {
    if(slide === 0){
        slide = maxSlide-3;
    }else{
        slide--
    }
    goToSlide(slide);
}

window.addEventListener("load", () => {
    goToSlide(slide);
})

left.addEventListener("click", prevSlide)
right.addEventListener("click", nextSlide)