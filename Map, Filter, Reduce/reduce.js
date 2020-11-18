/*
Array.prototype.reduce()
Executa uma função para cada elemento, retornando um único valor de retorno.

var newArray = arr.map(callback[,valor inicial])
*/ 

const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },

    {
        type: 'cat',
        name: 'mingau',
        age: 6,
        weight: 2
    },

    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },

    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },

    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },

    {
        type: 'fish',
        name: 'dory',
        age: 1,
        weight: 0.01
    },

    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 380
    },
]

// Retornanado a soma do peso de todos os animais

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0);

console.log(totalWeight);


// Retornando a soma das idades e do peso

const totalAgeWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0});

console.log(totalAgeWeight);


// Somando apenas os pesos dos cachorros

const totalDogWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total

    return total + pet.weight;
}, 0);

console.log(totalDogWeight);


/////////////////////////////////////////////////

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0);

console.log(totalWeight);

// filtrando só os dogs
const dogs = pets.filter((pet) => {
    return pet.type === 'dog'
});

console.log(dogs);

// somando os pesos dos dogs
const totalWeightDogs = dogs.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs);   

/////////////////////////////////////////////////////

// Encadeando as funções

const totalWeightDogs = pets
    .filter((pet) => {
        return pet.type === 'dog'
    })
    .reduce((total, pet) => {
        return total + pet.weight
    }, 0)

    console.log(totalWeightDogs);