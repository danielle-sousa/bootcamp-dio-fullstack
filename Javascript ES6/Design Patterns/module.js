class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from './models/person';

////////////////////////////

let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};

