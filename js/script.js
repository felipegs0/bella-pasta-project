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


function showMenu(btClicked) {
    if (btClicked == 'ent') {
        entContent.style.display = "flex";
        pasContent.style.display = "none";
        sobContent.style.display = "none";
    } else if (btClicked == 'pas') {
        entContent.style.display = "none";
        pasContent.style.display = "flex";
        sobContent.style.display = "none";
    } else if (btClicked == 'sob') {
        entContent.style.display = "none";
        pasContent.style.display = "none";
        sobContent.style.display = "flex";
    }
    changeColor(btClicked)
}

function changeColor(btClicked) {
    if (btClicked == 'ent') {
        btEnt.classList.add("btActivate")
        btPas.classList.remove("btActivate")
        btSob.classList.remove("btActivate")
    } else if (btClicked == 'pas') {
        btEnt.classList.remove("btActivate")
        btPas.classList.add("btActivate")
        btSob.classList.remove("btActivate")
    } else if (btClicked == 'sob') {
        btEnt.classList.remove("btActivate")
        btPas.classList.remove("btActivate")
        btSob.classList.add("btActivate")
    }
}