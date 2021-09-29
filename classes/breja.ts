export class Breja{
    nome:string;
    vaiBem:string;
    slogan:string;
    ph:number;
    preco:number;
    estoque:number;
    constructor(beer:any) {
      this.nome = beer.name;
      this.vaiBem = beer.food_pairing;
      this.slogan = beer.tagline;
      this.ph = beer.ph;  
      this.preco = Math.floor((beer.ibu * 30)/2);
      this.estoque = Math.floor(beer.ph * 20);
    }
  }