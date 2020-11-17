// De acordo com o código abaixo, o que será exibido no console.log:

const person = ["Cris"];

person.push("James", "Jenny");
person.push("John");

console.log(person);
// [ 'Cris', 'James', 'Jenny', 'John' ]



// Analise o código abaixo e assinale a alternativa que possui o valor da variável "colaboradoresComSalario":

const colaboradores = [
  { nome: "Cris", horasTrabalhadas: 220 },
  { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
  const salario = colaborador.horasTrabalhadas * 50;
  colaborador.salario = salario;

  return {
    salario: salario
  };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);

console.log(colaboradoresComSalario);
// [ { salario: 11000 }, { salario: 10500 } ]


// Analise o código abaixo e selecione a alternativa que possui o valor do array frutas após a execução das funções sort e reverse:

const frutas = ["amora", "laranja", "melancia", "acerola"];

frutas.sort();
frutas.reverse();

console.log(frutas);
// [ 'melancia', 'laranja', 'amora', 'acerola' ]


// Qual alternativa representa a forma correta de adicionar a fruta "amora" após a fruta "melancia" e removendo as frutas "abacaxi" e "caju":

const frutas = ["maracujá", "melancia", "abacaxi", "caju"];
frutas.splice(2,2,"amora");
console.log(frutas);
// resultado esperado: ["maracujá", "melancia", "amora"];



// Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos nos console.log respectivamente:

const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);
//[ 'Avó Zeca', 'Avô Aroldo' ]
//[ 'Avô Carlos', 'Primo João Paulo' ]
//[ 'Avó Zeca', 'Avô Aroldo', 'Avô Carlos', 'Primo João Paulo' ]



// Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos nos console.log respectivamente:

const alunos = [
  { nome: "Cris", nota: 10 },
  { nome: "Alexandre", nota: 7 },
  { nome: "Pablo", nota: 4 }
];

function alunoAprovado(aluno) {
  return aluno.nota >= 7;
}

console.log(alunos.filter(alunoAprovado));
console.log(alunos.some(alunoAprovado));
console.log(alunos.every(alunoAprovado));

// [ { nome: 'Cris', nota: 10 }, { nome: 'Alexandre', nota: 7 } ]
//true
//false



// Analise o código abaixo e selecione a alternativa que possui as formas possíveis de se remover o item "acerola" alterando o array "frutas":

const frutas = ["melancia", "laranja", "acerola"];

/*
I   - frutas.shift();
II  - frutas.pop();
III - frutas.splice(2, 1);
IV  - frutas.slice(2, 1);
V   - frutas.unshift();
*/ 

// II e III




// Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos no console.log respectivamente:

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));

//0
//0
//3
//Cris




// Assinale a alternativa que possui todas as formas possíveis de criar um array em que seu primeiro elemento possua o valor 2 (tipo int):

I   - [2];
II  - Array.from(2);
III - Array.of(2);
IV  - Array(2);
V   - new Array(2);

// I e III



// Assinale a alternativa que possui o valor retornado pela função flat:


const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];

console.log(frutas.flat(2));

// [ 'amora', 'laranja', 'melancia', 'acerola' ]