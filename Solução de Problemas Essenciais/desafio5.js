/* Pedro Bento e o Mundo de OZ */

let joias = [gets()];
let tiposJoia = [];
let tamanhoString = 0;

for (var i = 0; i < joias.length && tamanhoString <= 106; i++) {
   joias =[...joias, gets()];
   if(joias[i] === "" || joias[i] === undefined) break;
   if (!tiposJoia.includes(joias[i])){
     tiposJoia.push(joias[i]);
   }
   tamanhoString += joias[i].length;
}

console.log(tiposJoia.length);