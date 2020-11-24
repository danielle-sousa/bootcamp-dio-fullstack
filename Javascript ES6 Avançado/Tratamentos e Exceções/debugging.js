// Console

console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();        //traz informações de onde o código foi executado

//agrupando consoles
console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

// acompanhar tempo de execução de uma função
console.time('Log time')        
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

//formatação em tabela
console.table(['Danielle Sousa', 'Digital Innovation One']);

// espera que a condição seja verdadeira para executar o console
console.assert(1 === 1, 'Ops');

//estilizando o console
console.log('%c styled log', 'color: blue; font-size: 40px');