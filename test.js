class Product{
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(){
        return this.preco*0.9;
    }
}

class Book extends Product{
    constructor(nome, preco, autor){
    super(nome, preco);
    this.autor = autor;
    }

    calcularDesconto(){
        return this.preco *0.8;
    }
}

const productFinal = new Product("caça palavra", 20);
console.log(`Preço final do produto: R$ ${productFinal.calcularDesconto().toFixed(2)}`);

const book2 = new Book("Além do bem e do mal", 70, "Friedrich Nietzsche");
console.log(`Preço final do livro: R$ ${book2.calcularDesconto().toFixed(2)}`);