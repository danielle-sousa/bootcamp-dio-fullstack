function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5));


// trabalhando com uma quantidade indefinida de argumentos
function sum(a, b) {
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));

 
// rest operator ...
function sum(...args) {                 //...args = array
    return args.reduce((acc, value) => acc + value, 0);    
}
console.log(sum(5, 5, 5, 2, 3));


const sum = () => {
    console.log(arguments);         // retorna erro pois arguments não existe com arrow functions
}

/*****************************/

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(sum(5,5,5,2,3));

/****************************/
