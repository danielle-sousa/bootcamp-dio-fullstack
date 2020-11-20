/* generators */

// funções com pausa. pode ser usado para construir iteradores de maneira mais simples

function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());


function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number++;
    }
}

////////////////////////////////////////////////////

const it = naturalNumbers();

console.log(it.next()); // retorna 0
console.log(it.next()); // retorna 1
console.log(it.next()); // retorna 2
console.log(it.next()); // retorna 3

////////////////////////////////////////////////////

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}

