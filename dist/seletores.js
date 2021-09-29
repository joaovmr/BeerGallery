import * as dataF from "./dataFetcher.js";
import * as build from "./visual/build.js";
import * as tratamento from "./tratamentoBrejas.js";
const url = 'https://api.punkapi.com/v2/beers';
const data = await dataF.getBeers(url);
let beers = data;
const divPai = document.getElementById('beers');
const padrao = document.querySelector('#padrao');
const maisAcida = document.querySelector('#acid');
const menosAcida = document.querySelector('#lessAcid');
const maisCara = document.querySelector('#expensive');
const maisBarata = document.querySelector('#cheap');
padrao.addEventListener('change', function (e) {
    if (padrao.checked) {
        divPai.style.display = 'flex';
        divPai.innerHTML = '';
        return beers.map(function (beer) {
            build.montagem(beer, divPai);
        });
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
