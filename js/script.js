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
const popUp = document.getElementById("pop_up")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameClient = frm.inName.value;
    const time = frm.inTime.value;
    const inDate = frm.inDate.value;
    const date = new Date(inDate)
    const inObs = frm.inObs.value;
    const inNumber = frm.inNumber.value;

    let p = document.createElement('p')
    p.innerText = `Obrigado pela preferencia ${nameClient}!
    Sua reserva foi agendada para ${date.getDate() + 1}/0${date.getMonth()} às ${time}.`
    popUp.appendChild(p)

    mostrarPopUp(p)
    limparForm()
})

function mostrarPopUp(p) {
    popUp.classList.remove("oculto");
    setTimeout(() => {
        popUp.classList.add("visivel");
    }, 10)

    setTimeout(() => {
        popUp.classList.remove("visivel");
        setTimeout(() => {
            popUp.classList.add("oculto");
            p.innerText = "";
        }, 500)
    }, 4000)
}

function limparForm() {
    frm.inName.value = ""
    frm.inEmail.value = ""
    frm.inNumber.value = ""
    document.getElementById("inObs").value = "";
}

const inputDate = document.getElementById("inDate")
inputDate.addEventListener("change", (e) => {
    e.preventDefault()

    const lbTime = document.getElementById("lbTime")
    const inTime = document.getElementById("inTime")

    const dateParts = inputDate.value.split("-");
    const dataEspecifica = new Date(
        Number(dateParts[0]),
        Number(dateParts[1]) - 1,
        Number(dateParts[2])
    )
    const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const nomeDoDia = diaDaSemana[dataEspecifica.getDay()];
    if (nomeDoDia == "Segunda" || nomeDoDia == "Terça") {
        lbTime.classList.add("ocult")
        inTime.classList.add("ocult")

        const p = document.createElement("p")
        p.innerText = `Não abrimos nas segundas e terças! 
        Por favor, escolha outro dia!`
        popUp.appendChild(p)
        mostrarPopUp(p)
    } else {
        lbTime.classList.remove("ocult")
        inTime.classList.remove("ocult")
    }
})