// Criar um array
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

/*
Array.of
Cria uma nova instância de array a partir do número de parâmetros informados.
 */
const arr = Array.of(1,2,3);
console.log(arr);

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numbersAndStrings);

/*
Array
Cria uma nova instância de array de acordo com os parâmetros informados.
 */
const arr = Array(3);
console.log(arr);
// [empty x 3]

const arr2 = Array(3,2);
console.log(arr2);
// [3,2]

/*
Array.from
Cria uma nova instância de array a partir de um parâmetro array-like (como um node list) ou iterable object.
 */
const divs = document.querySelectorAll('div');
const arr = Array.from(divs);                   // transforma o node list em array

/////////////////////////////////////////////////////////////

/* Inserir e remover elementos */

// push
const frutas = ['melancia', 'banana'];
frutas.push('laranja');
console.log(frutas);

// pop
const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem);   // 'abacate'

console.log(arr);           // ['banana', 'melancia']

// unshift
const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength)  // 4

console.log(arr);       // ['acerola', 'banana', 'melancia', 'abacate']

// shift
const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.shift();

console.log(removedItem)        // 'banana'

console.log(arr);               // ['melancia', 'abacate']

// concat
const docinhos = ['brigadeiro', 'beijinho', 'bicho de pé'];
const salgados = ['coxinha', 'bolinha', 'maravilha'];

const festa = docinhos.concat(salgados);

console.log(festa);     // ['brigadeiro', 'beijinho', 'bicho de pé', 'coxinha', 'bolinha', 'maravilha']

console.log(salgados); // ['coxinha', 'bolinha', 'maravilha']

console.log(docinhos); // ['brigadeiro', 'beijinho', 'bicho de pé']

// slice
const arr = [1,2,3,4,5];

arr.slice(0,2); // [1,2]

arr.slice(2);   // a partir da segunda posição [3,4,5]

arr.slice(-1);  // pega a última posição [5]

arr.slice(-3);  // pega da última posição até a 3 [3,4,5]

// splice
const arr = [1,2,3,4,5];

arr.splice(2)   // a partir da 2 posição serão removidos [3,4,5]

console.log(arr);   // [1,2]

arr.splice(0, 0, 'first');  // qual a posição, quantos items serão removidos, o que será adicionado []

console.log(arr);   // ['first', 1, 2]


/////////////////////////////////////////////////////////////


/* Iterar elementos */

//forEach - altera o array original
const arr = [1,2,3,4,5];

/* arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
})
*/

arr.forEach(arrs => console.log(arrs));
// 1, 2, 3, 4, 5

arr.forEach((arrs, index) => console.log(index, arrs));
//0 1 
//1 2 
//2 3 
//3 4 
//4 5

arr.forEach((arrs, index, arr) => console.log(index, arrs, arr));
// 0 1 [1,2,3,4,5]
// 1 2 [1,2,3,4,5]
// 2 3 [1,2,3,4,5]
// 3 4 [1,2,3,4,5]
// 4 5 [1,2,3,4,5]

// map - não altera o array original, e sim retorna um novo array com o resultado
const arr = [1,2,3,4,5];

arr.map(value => value * 2);
// [2, 4, 6, 8, 10]


// flat
const arr = [1,2, [3,4]];

arr.flat();
// [1, 2, 3, 4]

const idades = [20, 34, [35, 60, [70, 40]]];
idades.flat(2);
// [20, 34, 35, 60, 70, 40];


// flatMap
const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]);
// [[2], [4], [6], [8]]


// keys
const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();     // {value: 0, done: false}

arrIterator.next();     // {value: 1, done: false}

arrIterator.next();     // {value: 2, done: false}

arrIterator.next();     // {value: 3, done: true}


// values
const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();     // {value: 1, done: false}

arrIterator.next();     // {value: 2, done: false}

arrIterator.next();     // {value: 3, done: false}

arrIterator.next();     // {value: 4, done: true}


// entries
const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next();     // {value: [0, 1], done: false}

arrIterator.next();     // {value: [1, 2], done: false}

arrIterator.next();     // {value: [2, 3], done: false}

arrIterator.next();     // {value: [3, 4], done: true}


/////////////////////////////////////////////////////////////


/* Buscar elementos */

// find
const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);   // 3


// findIndex
const arr = [1, 2, 3, 4];

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo);      // 2


// filter
const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo);   // [3, 4]


// indexOf
const arr = [1, 3, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);  // 1


// lastIndexOf
const arr = [1, 3, 3, 4, 3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem);   // 4


// includes
const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.includes(1);     // true

const hasItemTwo = arr.includes(2)      // false


// some
const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);   // true


// every
const arr = [1, 3, 3, 4, 3];

const allEvenNumbers = arr.every(value => value % 2 === 0); // false


/////////////////////////////////////////////////////////////


/* Ordenar elementos */

// sort
const arr = [1, 3, 2, 5, 4];

arr.sort();     // [1, 2, 3, 4, 5]


// reverse
const arr = [1, 2, 3, 4, 5];

arr.reverse();      // [5, 4, 3, 2, 1]


// join
const arr = [1, 2, 3, 4, 5];

arr.join('-');      // "1-2-3-4-5"


// reduce
const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0);    // 15

