import * as build from "./visual/build.js";
import * as dataF from "./dataFetcher.js";
import * as tratamento from "./tratamentoBrejas.js";
const url = 'https://api.punkapi.com/v2/beers';
const divPai = document.getElementById('beers');
const data = await dataF.getBeers(url);
let beers = data;
const visualizacaoPadrao = document.querySelector('#padrao');
const maisAcida = document.querySelector('#acid');
const menosAcida = document.querySelector('#lessAcid');
const maisCara = document.querySelector('#expensive');
const maisBarata = document.querySelector('#cheap');
function showBeers() {
    return beers.map(function (beer) {
        build.montagem(beer, divPai);
    });
}
visualizacaoPadrao.addEventListener('change', function (e) {
    if (visualizacaoPadrao.checked) {
        divPai.innerHTML = '';
        showBeers();
    }
});
maisAcida.addEventListener('change', function (e) {
    if (maisAcida.checked) {
        divPai.innerHTML = '';
        build.montagem(tratamento.brejaMaisAcida(), divPai);
    }
});
menosAcida.addEventListener('change', function (e) {
    if (menosAcida.checked) {
        divPai.innerHTML = '';
        build.montagem(tratamento.brejaMenosAcida(), divPai);
    }
});
maisCara.addEventListener('change', function (e) {
    if (maisCara.checked) {
        divPai.innerHTML = '';
        build.montagem(tratamento.brejaMaisCara(), divPai);
    }
});
maisBarata.addEventListener('change', function (e) {
    if (maisBarata.checked) {
        divPai.innerHTML = '';
        build.montagem(tratamento.brejaMaisBarata(), divPai);
    }
});
const totalEstoque = document.querySelector('#total');
function calculaTotal() {
    let valorTotalEstoque = 0, preco, estoque;
    beers.forEach((beer) => {
        preco = Math.floor((beer.ibu * 30) / 2);
        estoque = Math.floor(beer.ph * 20);
        valorTotalEstoque += (preco * estoque);
    });
    totalEstoque.innerHTML = 'Valor total do estoque: $' + valorTotalEstoque;
}
calculaTotal();
showBeers();
