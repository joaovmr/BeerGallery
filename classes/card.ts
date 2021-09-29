export class Card {
    div : HTMLElement;
    img : HTMLImageElement;
    span : HTMLElement;
    fundo : HTMLElement;
    colarinho  : HTMLElement;
    constructor() {
        this.div = createWithClass('div','breja');
        this.img = createNode('img') as  HTMLImageElement;
        this.span = createWithClass('span','conteudo');
        this.fundo = createWithClass('div','fundo');
        this.colarinho = createWithClass('div','colarinho ');
    }
  }
  
  function createNode(element:string) {
    return document.createElement(element);
  }
  
  function createWithClass(element:string,nome:string) {
    let breja = document.createElement(element);
    breja.className = nome;
    return breja;
  }