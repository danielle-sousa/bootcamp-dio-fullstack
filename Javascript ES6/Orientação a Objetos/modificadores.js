'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Danielle');

console.log(p);
// Person {getName: f, setName: f}

p.getName();
// "Danielle"

p.name;
// undefined

p.setName("Thor");
p.getName();
// "Thor"

/////////////////////////////////

/* NODE */

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const p = new Person("Danielle");

console.log(p);
// Person {}

p.getName();
// "Danielle"

p.name;
// undefined

p.setName("Thor");
p.getName();
// "Thor"