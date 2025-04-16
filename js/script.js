const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        header.classList.add("ocult");
    } else {
        header.classList.remove("ocult")
    }
})