let abbut = document.getElementById("aboutButton");
let timbut = document.getElementById("timeToVisitButton");
let attbut = document.getElementById("attractionsButton");
let abtab = document.getElementById("aboutTab");
let timtab = document.getElementById("timeToVisitTab");
let atttab = document.getElementById("attractionsTab");

function about() {
    abtab.classList.remove("d-none");
    timtab.classList.add("d-none");
    atttab.classList.add("d-none");

    abbut.classList.add("selected-button");
    timbut.classList.remove("selected-button");
    attbut.classList.remove("selected-button");
}

function time() {
    abtab.classList.add("d-none");
    timtab.classList.remove("d-none");
    atttab.classList.add("d-none");

    abbut.classList.remove("selected-button");
    timbut.classList.add("selected-button");
    attbut.classList.remove("selected-button");
}

function attract() {
    abtab.classList.add("d-none");
    timtab.classList.add("d-none");
    atttab.classList.remove("d-none");

    abbut.classList.remove("selected-button");
    timbut.classList.remove("selected-button");
    attbut.classList.add("selected-button");
}