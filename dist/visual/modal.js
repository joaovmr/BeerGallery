"use strict";
let modal = document.getElementById("myModal");
let conteudoModal = document.getElementById('modal-content');
let precoCarrinho = document.createElement('div');
precoCarrinho.innerHTML = '';
precoCarrinho.className = 'precoCarrinho';
precoCarrinho.id = 'precoCarrinho';
conteudoModal.prepend(precoCarrinho);
let btn = document.getElementById("myBtn");
btn.onclick = function () {
    modal.style.display = "block";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
