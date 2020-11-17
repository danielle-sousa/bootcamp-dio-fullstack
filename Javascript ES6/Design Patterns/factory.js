// não é Factory
function FakeUser() {
	this.name: 'Danielle';
	this.lastName: 'Sousa';
}

const user = new FakeUser();

////////////////////////////

// Factory
function FakeUser() {
	return {
		name: 'Danielle',
		lastName: 'Sousa'
	}
}

const user = FakeUser();


// Factory
function Pessoa() {
    return {
        name: 'Danielle',
        lastName: 'Sousa'
    }
}

const p = Pessoa();
console.log(p);

