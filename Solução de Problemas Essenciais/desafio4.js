/* Validação de Nota */

let cont = 0;
let notas = [];
let nota = 0;
let media = 0;

do{
  nota = parseFloat(gets())
  
  if(nota < 0 || nota > 10){
    console.log('nota invalida');
  } else {
    notas.push(nota);
    cont++;
  }
}while(cont <= 2);
media = parseFloat((notas[0] + notas[1]) / 2);
console.log('media = ' + media.toFixed(2));