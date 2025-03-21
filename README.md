# ex_ponderada_progsem6
 
# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

R: A resposta certa é a aleternativa 'a', pois a declaração da variável em 'var' permite acesso antes da atribuição, aparecendo "indefinido" ao não identificar nenhuma atribuição, todavia a declaração em 'let'não permite acesso sem atribuir, aparecendo a mensagem de "erro" em seguida.


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

R: A alternativa 'a' é a correta, pois a má funcionalidade está presente no primeiro 'if', onde sempre que entrar no mesmo (sempre que 'a' for 'a') irá aparecer a mensagem "Erro: número inválido", porém desta forma não deve ser a execução correta, mas sim quando 'a' for igual a 0 ou 'b' for igual a 0, somente assim deveria aparecer a mensagem "Erro: número inválido".
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

R: A alternativa correta é a 'b', pois ao entrar na condicional 'switch' ele apenas retornará o preço no valor que quebre no 'break', sendo assim, ele recebeu o último valor antes de sair (200), ou seja, ele recebe o valor 1000, mas antes de sair, o valor 200 é atribuída a variável 'preco'.
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

R:  Alternativa certa letra 'd', pois a função 'map' mapeia todos os valores atribuídos e, nesse caso, multiplia-os por 2, após isso a função 'filter' filtra apenas os números superiores a 5 e após isso soma-os com a função 'reduce'.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

R: A alternativa correta é a letra 'c', pois a função 'splice' é composta por indíce, quantidade e os itens nessa ordem, portanto ele começa do índice 1 (maçã) retira os 2 elementos contando este (maçã e uva) e posteriormente insere os outros elementos no lugar do removido (abacaxi e manga), logo a saída sera a lista, que é: banana, aacaxi, manga e laranja.
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

R: A alternativa certa é a 'a', uma vez que a afirmação I explica o propósito da herança (em código) e a afirmação II mostra como a herança é aplicada em código, logo a segunda justifica a primeira.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

R: A alternativa 'a' é a correta, sendo as alternativas certas a I, pois a classe 'funcionario' herda da classe 'pessoa', ja a afirmação II está correta por afirmar que o método 'apresentar()' da classe 'Funcionario' sobrepõe o mesmo método da classe 'Pessoa', todavia ainda chamando a classe pai por 'super.apresentar'.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

R: A altenativa correta é a letra 'b', pois 'Asserção' asserção está correta, uma vez que o polimorfismo permite diferentes implementações para o mesmo método de subclasses, e a razão está errada porque o JavaScript não suporta sobrecargas de métodos.
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) { //  variávelcontador (i) declarado e o comando certo seria numeros.length
        soma = 2*numeros[i]; // variável não esta declarado
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

```javascript
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
```

R: Neste exemplo a herança deixa a classe 'book' reutilize os atributos e métodos da classe 'product', não duplicando o código e, consequentemente, deixando-o mais limpo. Ademais, a classe 'book' modifica o método 'calcularDesconto()' para aplicar posteriormente um desconto diferente do anterior.