// testes utilizando o mocha

const assert = require('assert');
const Math = require('./math.js');

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math();

        try {
            assert.equal(math.sum(5, 5), 10);
        } catch (err) {
            console.log(err);
        }

    });
});

// assincrono
const assert = require('assert');
const Math = require('./math.js');

let value = 0;

describe('Math class', function () {
    //hooks
    beforeEach(function() {         // visa evitar repetições, redefinir valores, instanciar classes, etc
        value = 5;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);             // mocha permite somente até 2000ms, com essa propriedade é possível alterar esse limite

        value = 5

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();                     //validação de função assincrona (async/await, promise). dará como concluído somente após invocar o done.
        });
    });

    it('Multiply two numbers');         // é possível escrever componentes que ainda não existam para o teste, será retornado '1 pending'.

    it.only('Multiply two numbers', function() {        // only = somente este teste será executado
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });

    it.skip('Multiply two numbers', function() {        // skip = pular este teste na execução
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
});

// mocha recomenda não utilizar arrow functions para garantir o controle do escopo