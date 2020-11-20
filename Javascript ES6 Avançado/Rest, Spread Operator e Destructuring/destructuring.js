/******  destructuring assignment ******/
// quebra os itens e os atribui a uma variável

var arr = ['Maçã', 'Banana', 'Laranja',  ['Tomate']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// destructuring

var [apple2, banana2, orange2] = ['Maçã', 'Banana', 'Laranja'];

console.log(apple, apple2);

var [apple2, banana2, orange2, [tomato2]] = ['Maçã', 'Banana', 'Laranja', ['Tomate']];

console.log(tomato, tomato2);

/*****************************************/

//objetos literais

var obj = {
    name: 'Danielle'
}

var name = obj.name;

// com destructuring

var {name} = obj;
console.log(name);

// atribuindo um nome de variável diferente da propriedade
var {name: name2} = obj;
console.log(name2);


/*****************************************/

// o primeiro objeto não é alterado caso a nova variável seja modificada

var {name: name2} = obj;

name2 = 'Thor';

console.log(name2);     // retorna Thor
console.log(obj);       // retorna Danielle


/*****************************************/

//nested (objeto dentro de objeto)

var obj = {
    name: 'Danielle',
    props: {
        age: 29
    }
};

var age = obj.props.age;    //tradicional

var {props: { age } } = obj;    // destructuring
// ou var {props: { age: age2 } } = obj;

console.log(age)


/*****************************************/

var obj = {
    name: 'Danielle',
    props: {
        age: 29,
        colors: ['purple', 'black']
    }
};

var color1 = obj.props.colors[0];

var {
    props: { age: age2, colors: [color1, color2] }
} = obj;

console.log(color1);    // retorna purple


/*****************************************/

//functions

function sum(arr) {
    return arr[0] + arr[1]
}

console.log(sum[5,5]);

//com destructuring

function sum([a, b] = []) {
    return a + b
}

console.log(sum[5,5]);

//com default values

function sum([a, b] = [0, 0]) {
    return a + b
}

console.log(sum());     // retorna 0

// com objetos

function sum({ a, b }) {
    return a + b
}

console.log(sum({a: 5, b: 5}));