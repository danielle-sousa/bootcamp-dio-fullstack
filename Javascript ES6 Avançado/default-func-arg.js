function multiply(a, b) {
    b = b || 1;             // o parametro será 1 ao invés de undefined

    return a * b;
}
console.log(multiply(5,5));
console.log(multiply(5)); // se você não passar o segundo parametro, ele se torna 'undefined'. o resultado será NaN.
console.log(multiply(5,0)); // retorna 5 pois considera o 0 como 'false' no teste lógico acima

//resolvendo os problemas acima
function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}
console.log(multiply(5));       // 5
console.log(multiply(5,0));     // 0


// a partir do ecma6, utilizando argumento padrão
function multiply(a, b = 1) {
    return a * b;
}
// caso o segundo parametro não seja atribuido, será por padrão o valor 1.
console.log(multiply(5,5));     // 25
console.log(multiply(5));       // 5
console.log(multiply(5, 0));    // 0


// a ordem é importante, não é possível a seguinte declaração:
function multiply(b = a, a) {
    return a * b;
}
// o parametro a ainda não foi definido ao ser atribuido a b, portanto ocorrerá erro de referência.


// lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));