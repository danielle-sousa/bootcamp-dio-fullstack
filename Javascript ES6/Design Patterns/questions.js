// De acordo com o código abaixo, selecione a alternativa em que todas as comparações retornam true:

const name = 'Foo';
const lastName = String('Bar');

console.log(name.constructor === lastName.constructor);
console.log(name.prototype === String.prototype);
console.log(lastName.__proto__ === String.prototype);
console.log(name.__proto__.split === lastName.__proto__.split);

// I, III e IV

/*************************************/

// Analisando o código abaixo, quais serão as saídas dos console.log:

function Pessoa(nome) {
  this.nome = nome;
}

function PessoaFisica(nome, cpf) {
  Pessoa.call(this, nome);

  this.cpf = cpf;
}

function PessoaJuridica(nome, cnpj) {
  Pessoa(nome);

  this.cnpj = cnpj;
}

const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');

console.log(pessoaFisica);
console.log(pessoaJuridica);

// PessoaFisica { nome: 'Foo', cpf: '123.456.670-0' }
// PessoaJuridica { cnpj: '12.345.678/9012-34' }

/*************************************/

// De acordo com o código abaixo, as alternativas corretas são:

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  return {
    nome,
    idade: 20,
    falar() {
      console.log('objeto falar');
    }
  }
}

Pessoa.prototype.falar = function() {
  console.log('prototype falar');
};

const pessoa = new Pessoa('Foo', 30);

/**
 Com base no código acima, observe as afirmativas abaixo:
I   - O retorno será um objeto "{ nome: 'Foo', idade: 20 }". Pois mesmo chamando a função Pessoa com a palavra-chave new, a função possui retorno explicito.

II  - A expressão "pessoa.constructor === Pessoa" retornará true. Pois como utilizamos a palavra-chave new, sempre será retornado uma instância de pessoa, mesmo quando a função possui retorno explícito.

III - A expressão "pessoa.constructor === Object" retornará true. Pois o retorno da função é um objeto.

IV  - A expressão "pessoa.__proto__.falar === undefined" retornará true. Pois como há retorno explícito de um objeto na função Pessoa, suas definições não são passadas a esse objeto.

V   - Executando a função "pessoa.falar()" será logado no console o texto 'prototype falar'.
 */

 // I, III, e IV

 /*************************************/

 // Analise o código abaixo:

function Conta() {}
Conta.prototype.rendimento = 0;
Conta.prototype.depositar = function() {}
Conta.prototype.retirar = function() {}
Conta.prototype.exibirSaldo = function() {
  return `O saldo da conta é: ${this.saldo}.`;
}

function ContaPoupanca() {
  this.exibirSaldo = function() {
    return 'Operação não disponível';
  }
}

ContaPoupanca.prototype.rendimento = 0.03;
ContaPoupanca.prototype = Object.create(Conta.prototype);

const contaPoupanca = new ContaPoupanca();
console.log(contaPoupanca.__proto__.exibirSaldo());

/*
Agora avalie as afirmativas abaixo e assinale a alternativa que apresenta as corretas:
I   - A variável "contaPoupanca" será uma instância de ContaPoupanca, ou seja, a expressão "contaPoupanca instanceof ContaPoupanca" retornará true.
II  - A variável "contaPoupanca" possuíra os métodos "depositar", "retirar" e "exibirSaldo". Mas a implementação da função "exibirSaldo" não será sobrescrita, pois não é possível sobrescrever propriedades de um prototype.
III - O retorno da função "contaPoupanca.exibirSaldo()" será: "O saldo da conta é: undefined.".
IV  - O valor do atributo "rendimento" da variável "contaPoupanca" será 0.3.
V   - O retorno da função "contaPoupanca.__proto__.exibirSaldo()" será: "O saldo da conta é: undefined.".
*/

// I e V

/*********************************************/

// Analise a classe abaixo e seleciona a alternativa em que todas as afirmações são corretas:

class ID {
	static #contador = 0;

  static get contador() {
    return this.#contador;
  }

  static incrementaContador() {
    return ++this.#contador;
  }
}

class Cliente {
  #id = 0;

  constructor() {
    this.#id = ID.incrementaContador();
  }

  get id() {
    return this.#id;
  }
}

const c1 = new Cliente();
console.log(`Contador atual: ${ID.contador}.`);

const c2 = new Cliente();
const c3 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);

/*
As afirmativas abaixo são:
I   - É possível chamar o método "incrementaContador" sem instanciar a classe ID pois o método possui a palavra-chave static.
II  - A saídas dos console.log são respectivamente: "Contador atual: 1." e "Contador atual: 3.".
III - É possível instanciar a classe ID mas sua instancia não herdará os atributos/métodos com a palavra-chave static.
IV  - Quando uma função possui todos os atributos/métodos static não é possível chamá-la com a palavra-chave new.
V   - Métodos que possuem a palavra-chave static, só podem ser chamados por outros métodos static.
*/

// I, II e III

/*************************************/

class Pessoa {
    #nome = '';
  
    constructor(nome) {
      this.#nome = nome;
    }
  
    get nome() {
      return `Seu nome é: ${this.#nome}.`;
    }
  
    set nome(novoNome) {
      this.#nome = novoNome;
    }
  }
  
  const pessoa = new Pessoa();
  
  console.log(pessoa);
  console.log(pessoa.nome);
  pessoa.nome = 'Foo';
  console.log(pessoa.nome);

  // "Pessoa {#nome: "Foo"}", "Seu nome é: undefined." e "Seu nome é: Foo."

/*************************************/

  // No código abaixo as funções "adicionaUsuarioLogado" e "executaSeUsuarioEstaLogado" são exemplos de qual pattern:

  function adicionaUsuarioLogado(fn) {
    const usuarioLogado = {
      nome: 'Foo',
      sobrenome: 'Bar'
    };
  
    fn(usuarioLogado);
  }
  
  function executaSeUsuarioEstaLogado(usuarioLogado, fn) {
    if (!usuarioLogado) {
      console.log('Usuário não está logado.');
      return;
    }
    
    fn();
  }
  
  function notificaUsuarioLogado(usuarioLogado) {
    console.log(`Bem-vindo usuário ${usuarioLogado.nome}!`);
  }
  
  adicionaUsuarioLogado(
    usuarioLogado => executaSeUsuarioEstaLogado(usuarioLogado, () => {
      notificaUsuarioLogado(usuarioLogado);
    })
  );

  // Decorator

  /**********************************/

  // Analise as funções abaixo e selecione a alternativa em que todas são consideradas Factory:

  I - 
  function exibeNome(nome) {
    console.log(nome);
  }
  
  II -
  function Pessoa(nome) {
    this.nome = nome;
  }
  
  III -
  function Pessoa(nome) {
    return {
      nome
    };
  }
  
  IV -
  function recuperaDadosFormulario(formulario) {
    if (!formulario) {
      return {};
    }
  
    const dados = {
      nome: formulario.nome,
      idade: formulario.idade
    };
  
    return dados;
  }
  
  V -
  function setNome(nome) {
    this.nome = nome;
  }

  // III e IV