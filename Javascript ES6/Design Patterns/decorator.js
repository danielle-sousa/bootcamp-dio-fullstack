let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3))); // retorna false
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3))); // retorna 5
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3))); // retorna false

/////////////////////////////////////

// Syntax decorator

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() { return 'CEO'}
}

////////////////////////////////////////

// Angular

@Component({
    selector: 'app-reactive-favorite-color',
    template: `
        Favorite Color: <input type="text" [formControl]="favoriteColorControl">
    `
})
export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
}