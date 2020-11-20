/* Enhanced Object Literals */

// maneira tradicional
var obj = {
    prop1: 'Digital Innovation One'
};

// ou
var prop1 = 'Digital Innovation One'
var obj = {
    prop1: prop1
};
console.log(obj);


// ecma6
var prop1 = 'Digital Innovation One'
var obj = {
    prop1
};
console.log(obj);

//com funções
function method1() {
    console.log('method called');
}

var obj = {
    method1
};
console.log(obj);


// método dentro do objeto
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));

// encurtando a função
var obj = {
    sum(a, b) {
        return a + b;
    }
}
console.log(obj.sum(1, 5)); 