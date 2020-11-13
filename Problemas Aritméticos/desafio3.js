/* Cálculo de viagem */

let line = gets().split(" ");
let tempo = parseInt(line[0]);
let velocidade = parseInt(line[1]);
let distancia = tempo * velocidade;
let total = distancia / 12; 
console.log(total.toFixed(3));