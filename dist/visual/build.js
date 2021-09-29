import { Breja } from "../classes/breja.js";
import { Card } from "../classes/card.js";
import { Carrinho } from "../classes/carrinho.js";
let catalogo = new Carrinho();
let carrinho = new Carrinho();
let conteudoDoModal = document.getElementById('modal-content');
let precoDoCarrinho = document.getElementById('precoCarrinho');
function append(parent, el) {
    return parent.appendChild(el);
}
function adicionarNoCarrinhoArray(div) {
    let titulo, conteudoDoCatalogo;
    titulo = div.firstChild.firstChild.innerHTML;
    conteudoDoCatalogo = catalogo.itensNoCarrinho;
    conteudoDoCatalogo.forEach((item) => {
        if (titulo === item.nome) {
            carrinho.newItem(item.nome, item.vaiBem, item.slogan, item.ph, item.preco, item.estoque);
        }
    });
}
export function montagem(beer, div) {
    const breja = new Breja(beer);
    const card = new Card();
    let btn = document.createElement('button');
    btn.id = "add";
    btn.innerHTML = `+`;
    adicionar(btn);
    card.img.src = beer.image_url;
    card.colarinho.innerHTML = `<h1 class = "title">${breja.nome}</h1>`;
    card.span.innerHTML = `<p class = "middle">Goes with: ${breja.vaiBem}</p><p id = "qtd"></p>`;
    card.fundo.innerHTML = `<p class = "bottom">
    <span class = "slogan">${breja.slogan}</span> 
    <span>Preço: $<span id = 'preco'>${breja.preco}</span> </span> 
    <span>pH: ${breja.ph}</span> 
    <span>Em estoque: ${breja.estoque}</span>
    </p>`;
    catalogo.newItem(breja.nome, String(breja.vaiBem), breja.slogan, breja.preco, breja.ph, breja.estoque);
    append(card.div, btn);
    append(card.div, card.colarinho);
    append(card.div, card.img);
    append(card.div, card.span);
    append(card.div, card.fundo);
    append(div, card.div);
}
function adicionar(btn) {
    btn.onclick = function () {
        criarItem(btn);
    };
}
function criarItem(btn) {
    let controle = 0;
    let elementoDoCatalogo = btn.parentElement;
    let qtdElementosModal = conteudoDoModal.childElementCount;
    if (qtdElementosModal > 0) {
        let itens = document.getElementsByClassName('brejaCarrinho');
        let arrItens = Array.from(itens);
        arrItens.forEach((item) => {
            let title = item.getElementsByClassName('title');
            let secondTitle = elementoDoCatalogo?.getElementsByTagName('h1');
            if (title[0].innerHTML === secondTitle[0].innerHTML) {
                alert('Produto ja adicionado ao catalogo, por favor, mude apenas suas quantidades');
                controle = 1;
            }
        });
    }
    if (controle === 0) {
        let div = document.createElement('div');
        div.className = 'brejaCarrinho';
        div.innerHTML = elementoDoCatalogo?.innerHTML;
        let but = div.firstChild;
        div.removeChild(but);
        adicionarNoCarrinhoArray(div);
        let qtd = div.querySelector('#qtd');
        qtd.innerHTML = "<span>Quantidade </span><span id = 'qtd'>1</span>";
        let span = qtd.parentElement;
        let add = document.createElement('button');
        let sub = document.createElement('button');
        btnsItens(qtd, add, sub, div);
        span.prepend(sub);
        span.prepend(add);
        append(conteudoDoModal, div);
        valorDoCarrinho();
    }
}
function btnsItens(qtd, add, sub, div) {
    let val = qtd.getElementsByTagName('span')[1];
    let clicks = 1;
    add.innerHTML = '<i class="fa fa-plus"></i>';
    sub.innerHTML = '<i class="fa fa-minus"></i>';
    add.className = 'btnItem';
    sub.className = 'btnItem';
    add.onclick = function () {
        clicks += 1;
        val.innerHTML = clicks;
        valorDoCarrinho();
    };
    sub.onclick = function () {
        clicks -= 1;
        val.innerHTML = clicks;
        if (clicks <= 0) {
            div.remove();
            let titulo, conteudoDoCarrinho;
            titulo = div.firstChild.firstChild.innerHTML;
            conteudoDoCarrinho = carrinho.itensNoCarrinho;
            conteudoDoCarrinho.forEach((item, i) => {
                if (titulo === item.nome) {
                    carrinho.itensNoCarrinho.splice(i, i);
                    console.log(carrinho);
                }
            });
            valorDoCarrinho();
        }
        else {
            valorDoCarrinho();
        }
    };
}
function valorDoCarrinho() {
    let brejas = conteudoDoModal.getElementsByClassName('brejaCarrinho');
    let arrBrejas = Array.from(brejas);
    let total = 0;
    let preco;
    let qtd;
    arrBrejas.forEach((breja) => {
        preco = breja.getElementsByTagName('div')[1].getElementsByTagName('span')[1].getElementsByTagName('span')[0];
        qtd = breja.getElementsByTagName('span')[0].getElementsByTagName('p')[1].getElementsByTagName('span')[1];
        if (qtd === 0) {
            total += 0;
        }
        else {
            total += Number(qtd.innerHTML) * Number(preco.innerHTML);
        }
    });
    precoDoCarrinho.innerHTML = "Preço do carrinho $" + total;
}
