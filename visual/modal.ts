let modal = document.getElementById("myModal") as HTMLElement;
let conteudoModal = document.getElementById('modal-content') as HTMLElement

let precoCarrinho = document.createElement('div')
precoCarrinho.innerHTML = ''
precoCarrinho.className  = 'precoCarrinho'
precoCarrinho.id = 'precoCarrinho'
conteudoModal.prepend(precoCarrinho)

let btn = document.getElementById("myBtn") as HTMLButtonElement;

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}