'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = qtdePatas;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = morde;
    }
}

const pug = new Cachorro(false);

console.log(pug);
//Cachorro {qtdePatas: 4, morde: false}

//////////////////////////////////////

'use strict';

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const chihuahua = new Cachorro(true);