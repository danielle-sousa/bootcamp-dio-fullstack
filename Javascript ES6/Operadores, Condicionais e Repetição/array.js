const users = ['Danielle', 'Leonardo', 'Thor'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name: 'Danielle',
        age: 29,
        gender: gender.WOMAN
    },
    {
        name: 'Leonardo',
        age: 27,
        gender: gender.MAN
    },
    {
        name: 'Thor',
        age: 2,
        gender: gender.MAN
    },
];

//Retornar a quantidade de itens de um array
console.log('Itens:', people.length);

//Verificar se é array
console.log('A variável people é um array:', Array.isArray(people));

//Iterar os itens do array
people.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const men = people.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', men);

//Retornar um novo
const peopleWithCourse = people.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = people.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

//Juntando operações
const totalEvenAges = people
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age+= person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges);
