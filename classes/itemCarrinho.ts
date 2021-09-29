export class ItemCarrinho{
    nome:string;
    vaiBem:string;
    slogan:string;
    ph:number;
    preco:number;
    estoque:number;
    constructor(nome:string,vaiBem:string,slogan:string,ph:number,
        preco:number,estoque:number) {
      this.nome = nome;
      this.vaiBem = vaiBem;
      this.slogan = slogan;
      this.ph = ph;  
      this.preco = preco;
      this.estoque = estoque;
    }
  }