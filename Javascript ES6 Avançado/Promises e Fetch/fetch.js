//Fetch: realiza requisições utilizando promises

fetch('/data.json')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });
                        
    //o fetch só identifica erros de rede
    //identificando erros com outros status:

    fetch('/dataXTO.json')                      //arquivo inexistente, status 404
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });


    //por default, o segundo parametro do fetch é GET, mas pode ser utilizado também o POST
    