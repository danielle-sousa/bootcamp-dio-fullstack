class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber != f);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const obs = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

obs.subscribe(logData1);
obs.subscribe(logData2);
obs.subscribe(logData3);

obs.notify('Notified 1');

obs.unsubscribe(logData2);

obs.notify('Notified 2');

