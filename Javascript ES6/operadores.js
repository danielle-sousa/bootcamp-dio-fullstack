// Operador binário
operando1 operador operando2
1 + 2

//Operador unário
operando1 operador
operador operando1
x++

/******ARITMÉTICOS*******/
// Módulo (%)
// Operador binário. Retorna o inteiro restante da divisão de dois operandos.

12 % 5 // retorna 2.accordion

//Incremento (++) e Decremento (--)
++x
x++

const a = ++2; // 3 recebe o incremento primeiro
const b = 2++; // 2 recebe o valor atual primeiro

--x
x--

//Negação (-) e Adição (+)
-3
+"3"    // retorna 3
+true   // retorna 1
+false  // retorna 0
-true   // retorna -1 

//Operador de exponenciação (**)
2 ** 3  //retorna 8
10 ** -1 // retorna 0.1

//Operador de agrupamento ()
2 * (3 + 2)


/******ATRIBUIÇÃO******/

//Atribuição
x = y

//Atribuição de adição
x = x + y // ou
x += y 

//Atribuição de subtração
x = x - y // ou
x -= y

//Atribuição de multiplicação
x = x * y // ou
x *= y

//Atribuição de divisão
x = x / y //ou
x /= y 

//Atribuição de resto
x = x % y // ou
x %= y 



/*******COMPARAÇÃO********/

//Igual (==)
//Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

//Não igual (!=)
//Retorna verdadeiro caos os operandos não sejam iguais. var1 != 4
var2 != "3"

//Estritamente igual (===)
//Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo;
3 === var1

//Estritamente não igual (!==)
//Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
var1 !== "3"
3 !== '3'

//Maior que (>)
//Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
var2 > var1
"12" > 2

//Maior ou igual que (>=)
//Retorna verdadeiro caso o operador da esquerda seja maior ou igual ao da direita.
var2 >= var1
var1 >= 3

//Menor que (<)
//Retorna verdadeiro caso o operador da esquerda seja menor que o da direita
var1 < var2
"12" < "2"

//Menor ou igual que (<=)
//Retorna verdadeiro caso o operador da esquerda seja menor ou igual ao da direita
var1 <= var2
var2 <= 5


/*******CONDICIONAL*******/

//Ternário
condicao ? valor1 : valor2

true ? 'foo' : 'bar'    // retorna 'foo'
false ? 'foo' : 'bar'   // retorna 'bar'


/*******LÓGICOS*******/

//AND lógico (&&)
exp1 && exp2

var a1 = true && true;      //t && t retorna true
var a2 = true && false;     //t && f retorna false
var a3 = false && true;     //f && t retorna false
var a4 = false && (3 == 4); //f && f retorna false
var a5 = "Gato" && "Cão";   //t && t retorna "Cão"
var a6 = false && "Gato";   //f && t retorna false
var a7 = "Gato" && false;   //t && f retorna false

//OU lógico (||)
exp1 || exp2
var o1 = true || true;      //t || t retorna true
var o2 = false || true;     //f || t retorna true
var o3 = true || false;     //t || f retorna true
var o4 = false || (3 == 4); //f || f retorna false
var o5 = "Gato" || "Cão";   //t || t retorna Gato
var o6 = false || "Gato";   //f || t retorna Gato
var o6 = "Gato" || false;   //t || f retorna Gato

//NOT lógico (!)
!exp1
var n1 = !true;     //!t retorna false
var n2 = !false;    //!f retorna true
var n2 = !"Gato";   //!t retorna false (string com valor é true)

/*******UNÁRIOS*******/

//Deletar algo
delete something;

//Determinar tipo
typeof something;

/**********BINÁRIOS********/

//in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicomoro");
0 in arvores;           //retorna true
3 in arvores;           //retorna true
6 in arvores;           //retorna false
"cedro" in arvores;     //retorna false (você deve especificar o número do indice, não o valor naquele indice)
"length" in arvores     //retorna true (lenght é uma propriedade de Array)

//Objetos predefinidos
"PI" in Math;                           //retorna true
var minhaString = new String("coral");
"length" in minhaString;                //retorna true

//Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;    //retorna true
"modelo" in meuCarro;   //retorna true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {      //dia é instancia de date
    //code here
}