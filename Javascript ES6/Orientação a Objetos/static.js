'use static';

function Person() {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());
// "walking..."

// ||
// \/

'use static';

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk());
// "walking..."