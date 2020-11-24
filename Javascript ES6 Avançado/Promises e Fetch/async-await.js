// ES7 - Async / Await

const simpleFunc = async () => {
    return 12345;
};

console.log(simpleFunc()); // retorna uma Promise resolvida

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Oh No!', err);
    });

//await = espera que outras Promises sejam resolvidas

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    //aguarda a resolução da promise e retorna os dados
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
    //os dados serão retornados sequencialmente
    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Oh No!', err);
    });

    
// execução asíncrona paralelamente
const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    
    return data;
};