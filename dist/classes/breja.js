export class Breja {
    nome;
    vaiBem;
    slogan;
    ph;
    preco;
    estoque;
    constructor(beer) {
        this.nome = beer.name;
        this.vaiBem = beer.food_pairing;
        this.slogan = beer.tagline;
        this.ph = beer.ph;
        this.preco = Math.floor((beer.ibu * 30) / 2);
        this.estoque = Math.floor(beer.ph * 20);
    }
}
