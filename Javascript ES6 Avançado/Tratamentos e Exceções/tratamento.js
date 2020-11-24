/* Tratamento de erros */

try {
console.log(name);              
const name = 'Danielle Sousa';
} catch(err) {
    console.log('Error: ', err);
} finally {
console.log('Keep going...');
}

// erro customizado

class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Danielle Sousa';

    const myError = new CustomError({
        message: 'Custom message',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log('Keep going...')
}