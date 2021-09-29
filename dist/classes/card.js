export class Card {
    div;
    img;
    span;
    fundo;
    colarinho;
    constructor() {
        this.div = createWithClass('div', 'breja');
        this.img = createNode('img');
        this.span = createWithClass('span', 'conteudo');
        this.fundo = createWithClass('div', 'fundo');
        this.colarinho = createWithClass('div', 'colarinho ');
    }
}
function createNode(element) {
    return document.createElement(element);
}
function createWithClass(element, nome) {
    let breja = document.createElement(element);
    breja.className = nome;
    return breja;
}
