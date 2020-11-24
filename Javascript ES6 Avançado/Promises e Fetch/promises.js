// Promises

const doSomethingPromise = () =>
 new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>
 new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Second data');
    }, 1000);
});



doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));



// pegar os dados e invocar uma nova promise
doSomethingPromise
    .then(data => {
        console.log(data); 
        return doOtherThingPromise;
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));


/* Status da Promise */

// Pending = em execução 
// Fulfilled = terminou de executar
// Reject = erro


//Promises em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    });

    
// a Promise que for resolvida primeiro, terá seus dados retornados
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});