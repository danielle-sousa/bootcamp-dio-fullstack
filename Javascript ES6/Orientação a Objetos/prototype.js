new Foo();
/**
 O que ocorre?

 1 - Um novo objeto é crido, herdando Foo.prototype
 2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
 3 - Caso a função construtora tenha um retorno específico, será respeitado o seu 'return'. Se não, será retornado o objeto criado no passo 1.  
 */

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);    // retorna 4

console.log(cachorro.__proto__ === Animal.prototype);   // true
console.log(Animal.__proto__ === Function.prototype);   // true

console.log(cachorro instanceof Animal);    // true
console.log(cachorro instanceof Function);  // false

/////////////////////////////////////////

function Cachorro(morde) {
    Animal.call(this, 4);       //herdando a propriedade qtdePatas de Animal

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
//Cachorro {qtdePatas: 4, morde: false}

//////////////////////////////////////////

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}
//dessa forma, toda vez que for criado um novo Cachorro, as funções latir e movimentar serão criadas novamente.
//Como corrigir isso:

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);     //informando que é derivado de Animal, recebendo todas suas propriedades
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const chihuahua = new Cachorro(true);


/////////////////////////////////////////////


 function Pessoa() {
     this.name = name;
 }

 const p = new Pessoa('Danielle');
 console.log(p);                //retorna Danielle



 function outraPessoa() {
    this.name = name;

    return {
        name: 'Teste'
    };
}

const p2 = new outraPessoa('Danielle');
console.log(p2);        // retorna name:"Teste"


