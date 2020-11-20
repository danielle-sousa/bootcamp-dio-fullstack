//maneira tradicional
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
}

// spread operator
//quebra itens/listas e os repassa como parametros

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply(...rest);
}

console.log(sum(5, 5, 5, 2, 3));

/*************************/

// spread operator pode ser utilizado em strings, arrays, objects e objetos iteráveis

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);        // quebra letra a letra e adiciona-as à uma lista



const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
logArgs(...arr);        // retorna 1, 2, 3


//unindo dois arrays

const arr2 = arr.concat([5, 6, 7]);
console.log(arr2);

// com spread
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const arr3 = [...arr, ...arr2, 0, 0, 0];
console.log(arr3);


//clonando arrays
const arrClone = [...arr];
console.log(arrClone);


//com objetos literais
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);
//só podemos utilizar o spread com objetos literais não iteráveis para construir outro obj

// não se pode utilizar o spread para construir um array a partir de um obj literal
const arrr = [...obj];
console.log(arrr);

/*******************************/

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test: 456
};

const obj3 = {
    test: 789,
    ...obj
};

console.log(obj2);       // retornará 123 primeiro
console.log(obj3);       // retornará 789 primeiro

/*******************************/

const obj = {
    test: 123
};

const obj2 = obj;

obj2.test = 456;        // o primeiro obj foi alterado já que ambos apontavam para a mesma propriedade

console.log(obj);

// clonando (shallow clone)
const obj = {
    test: 123
};

const obj2 = {...obj};

console.log(obj2);