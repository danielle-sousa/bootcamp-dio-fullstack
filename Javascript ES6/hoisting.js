 // Variáveis

 function fn() {
     console.log(text);         // retorna undefined

     var text = 'Exemplo';

     console.log(text);         // retorna 'Exemplo'
 }

 fn();

 // Funções

 function fn() {
     log('Hoisting de função');

     function log(value) {
         console.log(value);
     }
 }

 fn()

 /*
  function fn() {
      function log(value) {     //boa prática declarar a função antes de usar
          console.log(value);
      }

      log('Hoisting de função');
  }
  */