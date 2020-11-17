var SETTINGS = {
	api: 'http://localhost',
	trackJsToken: '12345'
}

////////////////////////////

function MyApp() {
	if (!MyApp.instance) {
		MyApp.instance = this;
	}

	return MyApp.instance;
}

//////////////////////////

function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Danielle'});

const p2 = Pessoa.call({ name: 'Custom Name'});

console.log(p);
console.log(p2);