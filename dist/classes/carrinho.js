import { ItemCarrinho } from "./itemCarrinho.js";
export class Carrinho {
    carrinho;
    constructor() {
        this.carrinho = [];
    }
    newItem(nome, vaiBem, slogan, ph, preco, estoque) {
        let item = new ItemCarrinho(nome, vaiBem, slogan, ph, preco, estoque);
        this.carrinho.push(item);
    }
    get itensNoCarrinho() {
        return this.carrinho;
    }
    get qtdDeItens() {
        return this.carrinho.length;
    }
}
