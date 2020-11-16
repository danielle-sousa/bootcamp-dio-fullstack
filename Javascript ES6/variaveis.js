var nameVar = 'Danielle'; // não respeita escopo de bloco
let nameLet = 'Danielle';  //respeita escopo de bloco
const nameConst = 'Danielle'; // respeita escopo de bloco

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

const name = 'Danielle';
// Não podemos alterar o valor
name = 'Danielle';

const user = {
    name: 'Danielle'
};
// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Danielle'
};

const people = ['Danielle', 'Maria', 'Bianca'];

//Podemos adicionar novos itens
people.push('Camila');

// Podemos remover algum item
people.shift();

//Podemos alterar diretamente
people[1] = 'Clara';

console.log('\nArray após as alterações: ', people);




/* ESCOPOS */

//escopo global
{
    //escopo de bloco
    //ex: if, for, while, etc
}

function test() {
    // escopo de função
}

/* Exemplos */

var test = 'example';

(() => {
    console.log(`Valor dentro da função: "${test}"`);

    if(true) {
        var test = 'example';
        console.log(`Valor dentro do if: "${test}"`);
    }

    console.log(`Valor após a execução do if: "${test}"`);
})();

/* LET */

(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função: "${test}"`);

    if(true) {
        let test = 'valor if';
        console.log(`Valor dentro do if: "${test}"`);
    }

    console.log(`Valor após a execução do if: "${test}"`);
})();

/* CONST */
(() => {
    const test = 'valor função';
    console.log(`Valor dentro da função: "${test}"`);

    if(true) {
        const test = 'valor if';
        console.log(`Valor dentro do if: "${test}"`);
    }

    console.log(`Valor após a execução do if: "${test}"`);
})();

