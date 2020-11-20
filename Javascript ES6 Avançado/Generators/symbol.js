//symbols
//maneira de gerar um identificador único

const uniqueId = Symbol();

console.log(uniqueId);

//o valor do symbol não é um texto (string) ou número

const uniqueId = Symbol('Hello');   //serve unica e exclusivamente para debugging

const obj = {
    [uniqueId]: 'Hello'
};
// não é acessível através do keys

console.log(obj);

//////////////////////////////////////////////////////

//well known symbols

Symbol.iterator()
Symbol.split()
Symbol.toStringTag()

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

console.log(it.next()); // retorna 1, false
console.log(it.next()); // retorna 2, false
console.log(it.next()); // retorna 3, false
console.log(it.next()); // retorna 4, false
console.log(it.next()); // retorna undefined, true


//anteriormente
while(true) {
    let { value, done} = it.next();

    if(done) {
        break;
    }

    console.log(value);
}

//ecma6
for (let value of arr) {
    console.log(value);
}

///////////////////////////////////////

//tornando o objeto iterável

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1 ],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//iterando o objeto
for (let value of obj) {
    console.log(value);
}

//spread
const arr2 = [...obj];

