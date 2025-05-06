const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("ocult");
    } else {
        header.classList.remove("ocult")
    }
})

const btEnt = document.getElementById("btEnt")
const btPas = document.getElementById("btPas")
const btSob = document.getElementById("btSob")

const entContent = document.getElementById("ent-content")
const pasContent = document.getElementById("pas-content")
const sobContent = document.getElementById("sob-content")

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('entrada')) {
        entContent.style.display = "flex";
        pasContent.style.display = "none";
        sobContent.style.display = "none";

        btEnt.classList.add("btActivate")
        btPas.classList.remove("btActivate")
        btSob.classList.remove("btActivate")

    } else if (el.classList.contains('pasta')) {
        entContent.style.display = "none";
        pasContent.style.display = "flex";
        sobContent.style.display = "none";

        btEnt.classList.remove("btActivate")
        btPas.classList.add("btActivate")
        btSob.classList.remove("btActivate")
    } else if (el.classList.contains('sobremesa')) {
        entContent.style.display = "none";
        pasContent.style.display = "none";
        sobContent.style.display = "flex";

        btEnt.classList.remove("btActivate")
        btPas.classList.remove("btActivate")
        btSob.classList.add("btActivate")
    }
});

const slides = document.querySelectorAll(".slide")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

let slide = 0;
let maxSlide = slides.length;

function goToSlide(slide) {
    slides.forEach(
        (e, i) => (e.style.transform = `translateX(${100 * (i - slide)}%`)
    );
};

function nextSlide() {
    if(slide === maxSlide - 3) {
        slide = 0
    } else {
        slide++
    }
    goToSlide(slide)
}

function prevSlide() {
    if(slide === 0) {
        slide = maxSlide - 3;
    } else {
        slide--
    }
    goToSlide(slide)
}

window.addEventListener("load", () => {
    goToSlide(slide);
})

left.addEventListener("click", prevSlide)
right.addEventListener("click", nextSlide)



const frm = document.querySelector("form")
const btReservar = document.getElementById("btReservar")

btReservar.addEventListener("click", (e) => {
    e.preventDefault()

    nameClient = frm.inName.value;
    tel = frm.inNumber.value;
    date = frm.inDate.value;
    email = frm.inEmail.value;
    numClient = frm.inPessoas.value;
    time = frm.inTime.value;

    console.log(nameClient, tel, date, email, numClient, time)
})