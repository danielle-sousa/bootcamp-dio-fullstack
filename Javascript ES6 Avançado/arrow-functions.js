//funções tradicionais:
function log(value) {
    console.log(value);
}
log(teste);


var sum = function(a, b) {
    return a + b;
}

console.log(sum(5,8));


// arrow functions =>
// são funções anonimas, só podem ser utilizadas atribuidas a uma variável ou como parâmetro de outra função.

var sum = (a, b) => a + b;
console.log(sum(5,5));

var sum = a => a + 5; // quando tivermos apenas um argumento, podemos omitir os parenteses.

/**************************************************/

// objetos literais
var obj = {
    test: 12345
}

// retornando um objeto literal
var createObj = () => ({ teste: 12345 });
console.log(createObj());

/**************************************************/

// objeto construtor
function Car() {
    this.foo = 'bar';
}
console.log(new Car());

// não é possível usar obj construtor com arrow function por causa do 'this'
var Car = () => {
    this.foo = 'bar'
}

/**************************************************/

// hoisting não funciona com arrow function
log('teste');

var log = value => {
    console.log(value);
};

/**************************************************/

// antes do ecma6

var obj = {
    showContext: function showContext() {
        console.log(this);                  //referencia o próprio elemento; contexto de invocação
    },
    
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();


var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(
            function() {
                this.log('after 1000ms');
            },
            1000
        );
    },
    
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

// com arrow function

var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
                this.log('after 1000ms');
            }, 1000);
    },
    
    log: function log(value) {
        console.log(value);
    }
};
// o this da arrow function é referente ao contexto de toda a função (contexto léxico)
obj.showContext();

