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
