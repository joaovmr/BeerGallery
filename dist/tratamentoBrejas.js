import * as fil from "./modifiers/filters.js";
import * as dataF from "./dataFetcher.js";
const url = 'https://api.punkapi.com/v2/beers';
const data = await dataF.getBeers(url);
let beers = data;
export function brejaMaisAcida() {
    let resultado = "";
    let tratamento = beers
        .filter(fil.validPh)
        .reduce(fil.max);
    resultado = tratamento;
    return resultado;
}
export function brejaMenosAcida() {
    let resultado = "";
    let tratamento = beers
        .filter(fil.validPh)
        .reduce(fil.min);
    resultado = tratamento;
    return resultado;
}
export function brejaMaisCara() {
    let resultado = "";
    let tratamento = beers
        .filter(fil.validIbu)
        .reduce(fil.maxv);
    resultado = tratamento;
    return resultado;
}
export function brejaMaisBarata() {
    let resultado = "";
    let tratamento = beers
        .filter(fil.validIbu)
        .reduce(fil.minv);
    resultado = tratamento;
    return resultado;
}
