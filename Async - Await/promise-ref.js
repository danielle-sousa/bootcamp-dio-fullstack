// IIFE
(async function () {
    console.log('Olá mundo')
})()
//automaticamente retorna uma promise

(function () {
    return new Promise((resolve, reject) => {
        console.log('Olá mundo');
        resolve();
    })
})()


(async function() {
    console.log('Begin')

    const text = await promise
    console.log(text)

    // or
    console.log(await promise)

    //or
    try {
        const res = await promise
        setTimeout(() => console.log(res), 5000)
    } catch (rej) {
        console.error(rej)
    }

})
