/*
Array.prototype.map()
Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items.

var newArray = arr.map(callback[,thisArg])
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

console.log(pets);

// Retornando um array apenas com os nomes

const petNames = pets.map((pet) => {
    return pet.name;
})

console.log(petNames);

// Comparando com o forEach

const forEachPetNames = pets.forEach((pet) => {
    return pet.name;                        // não retorna um array, apenas itera       
});

console.log(forEachPetNames);

// retornando um array pra função acima

const forEachPetNames = []

pets.forEach((pet) => {
    forEachPetNames.push(pet.name);
})

console.log(forEachPetNames);

