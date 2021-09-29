"use strict";
let search = document.getElementById("search");
search.addEventListener("keyup", filterSearch);
function filterSearch() {
    let conteudoInput, title, breja, middle, bottom, brejaCard;
    conteudoInput = search.value.toUpperCase();
    breja = document.getElementsByClassName('breja');
    let arrBreja = Array.from(breja);
    arrBreja.forEach((breja) => {
        title = breja.getElementsByClassName('title');
        middle = breja.getElementsByClassName('middle');
        bottom = breja.getElementsByClassName('bottom');
        brejaCard = breja;
        if (title[0].innerHTML.toUpperCase().indexOf(conteudoInput) > -1) {
            brejaCard.style.display = "flex";
        }
        else if (middle[0].innerHTML.toUpperCase().indexOf(conteudoInput) > -1) {
            brejaCard.style.display = "flex";
        }
        else if (bottom[0].innerHTML.toUpperCase().indexOf(conteudoInput) > -1) {
            brejaCard.style.display = "flex";
        }
        else {
            brejaCard.style.display = "none";
        }
    });
}
