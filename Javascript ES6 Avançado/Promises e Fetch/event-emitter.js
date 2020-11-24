// EventEmitter (exclusivo do Node)

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const emitter = new EventEmitter();     // consome o evento

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Danielle Sousa' });


emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Danielle Sousa' });



// consumindo apenas uma vez
users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Danielle Sousa' });
users.userLogged({ user: 'Thor' });
//apenas o primeiro será retornado