import { ItemCarrinho } from "./itemCarrinho.js";

export class Carrinho {
    carrinho: ItemCarrinho[];
    constructor(){
        this.carrinho = []
    }
    newItem(nome:string,vaiBem:string,slogan:string,ph:number,
            preco:number,estoque:number){
        let item = new ItemCarrinho(nome,vaiBem,slogan,ph,preco,estoque)
        this.carrinho.push(item);
    }
    get itensNoCarrinho(){
        return this.carrinho
    }
    get qtdDeItens(){
        return this.carrinho.length
    }
  }