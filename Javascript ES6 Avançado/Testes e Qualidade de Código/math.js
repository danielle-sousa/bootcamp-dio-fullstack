class Math {
    sum(a, b) {
        return a + b;
    }
}

module.exports = Math;

// assincrono
class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 2500); 
    }

    multiply(a, b) {
        return a * b;
    }

    printSum(req, res) {
        res.load('index', a + b);
    }
}
