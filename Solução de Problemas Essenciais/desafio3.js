/* Ultrapassando V */

let R = parseInt(gets());
let V = parseInt(gets());

let i = 2
let soma = R
let s=1

while (V <= R) {
    V = parseInt(gets());
}
 
while (soma <= V){
    soma = soma +  R + s
   
    if (soma <= V){
        i = i + 1
        s=s+1
    }
}
console.log(i);