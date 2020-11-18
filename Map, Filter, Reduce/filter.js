for (var i = 0; i < Array.length; i++) {
    if(array.indexOf(array[i] === i)) {
        models.push(array[i]);
    }
}

var uniqueProducts = array.filter(function(elem, i, array) {
    return array.indexOf(elem) === i;
});

/* Array.prototype.filter() 
Cria um novo array com todos os elementos que passaram no teste ad função fornecida

var newArray = arr.filter(callback[,thisArg])
*/

const pets = [
    {
        name: 'Rex',
        type: 'dog',
        age: 10
    },

    {
        name: 'Meow',
        type: 'cat',
        age: 2
    },

    {
        name: 'Nemo',
        type: 'fish',
        age: 1
    }
]

console.log(pets);

// Retornando os pets com idade menor que 5

const newPets = pets.filter((pet) => {
    return pet.age < 5
});

console.log(newPets);

// Outra forma de fazer a função acima

const eMenorQueCinco = (numero) => {
    return numero < 5;
}

const checkPets = pets.filter(({ age }) => eMenorQueCinco(age));
console.log(checkPets);
