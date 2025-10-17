// Exercise 1:
console.log("Exercise 1");
const objectPerson = {
    name: "John",
    age: 30,
}
console.log(objectPerson);
// define a prototype
const objectMethod = {
    greetings: function() {
        console.log(`Hello ${this.name}. I am ${this.age} years old.`);
    }
}
// Assign the prototype to the object
Object.setPrototypeOf(objectPerson, objectMethod);
// Call the method
objectPerson.greetings();
console.log(objectPerson);
console.log(objectPerson.__proto__);

// Exercise 2:
console.log("Exercise 2");
const objectParent = {
    name: "John",
    age: 30,
}
const objectSon = {
    job: "teacher",
    isStudent: true,
}
objectSon.__proto__ = objectParent;
console.log(objectSon.name);
console.log(objectSon.age);
console.log(objectSon.job);
console.log(objectSon.isStudent);

const otherSon = Object.create(objectParent);
otherSon.job = "electrician";
otherSon.isStudent = false;
otherSon.name = "Johnny";
otherSon.age = 20;
console.log(otherSon.name);
console.log(otherSon.age);
console.log(otherSon.job);
console.log(otherSon.isStudent);

// Exercise 3:
console.log("Exercise 3");
const animal = {type: "dog"};
animal.makeSound = function() {console.log("animal make a noise!")};
animal.makeSound();
console.log(animal);

// Exercise 4:
console.log("Exercise 4");
const dollarEuroExchange = {
    _dollar: 1,
    _rate: 0.88,
    get dollar() {
        return this._dollar;
    },
    set dollar(value) {
        this._dollar = value;
    },
    get euro() {
        return this._dollar * this._rate;
    },
    set euro(value) {
        this._dollar = value / this._rate;
    }
}
dollarEuroExchange.dollar = 10;
console.log(dollarEuroExchange.dollar);
console.log(dollarEuroExchange.euro);

dollarEuroExchange.euro = 88;
console.log(dollarEuroExchange.dollar);
console.log(dollarEuroExchange.euro);

// Exercise 5:
console.log("Exercise 5");
const exchangeToSoles = {
    _rateSoles: 3.5,
    get soles() {
        return this._dollar * this._rateSoles;
    },
    set soles(value) {
        return this._dollar = value / this._rateSoles;
    }
}
const printExchange = {
    printExchange: function() {
        console.log(`${this.dollar} dollars are ${this.euro} euros and ${this.soles} soles.`);
    }
}
Object.setPrototypeOf(dollarEuroExchange, exchangeToSoles);
Object.assign(dollarEuroExchange, printExchange);
dollarEuroExchange.dollar = 10;
console.log(dollarEuroExchange.soles);
dollarEuroExchange.printExchange();

// Exercise 6:
console.log("Exercise 6");
class Vehicle {
    constructor(name, year, make) {
        if (new.target === Vehicle) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
        this.year = year;
        this.make = make;
    }
    start() {
        throw new Error("Method not implemented");
    }
}

class Car extends Vehicle {
    constructor(name, year, make, model) {
        super(name, year, make);
        this.model = model;
    }
    start() {
        console.log("Car started");
    }
}
const car = new Car("car",2020, "Toyota", "Corolla");
car.start();
console.log(car.year);
console.log(car.make);

// Exercise 7:
console.log("Exercise 7");
class Bicycle extends Vehicle{
    constructor(name, year, make, model) {
        super(name, year, make);
        this.model = model;
    }
    start() {
        console.log("Bicycle started");
    }
}
const bicycle = new Bicycle( "Bicycle", 2024, "BMX", "Mountain");
bicycle.start();
console.log(bicycle.year);
console.log(bicycle.make);

// Exercise 8:
console.log("Exercise 8");
const fillUpTank = {
    fillUpTank() {
        console.log(`Filling up the tank for ${this.name}`);
        console.log("Tank is full");
    }
}
Object.assign(Car.prototype, fillUpTank);
const car2 = new Car("car",2020, "Volvo", "Raptor");
car2.fillUpTank();

// Exercise 9:
console.log("Exercise 9");
class Logger {
    static #instance;
    constructor() {
        if (Logger.#instance) return Logger.#instance;
        this.level = "info";
        Logger.#instance = this;
    }
    setLevel(level) {this.level = level};
    log(msg) {
        const ts = new Date().toISOString();
        console.log(`${ts} [${this.level}] ${msg}`);
    }
}
const logger = new Logger();
logger.setLevel("debug");
logger.log("Running a debug operation");
const logger2 = new Logger();
logger2.setLevel("info");
logger2.log("Running an info operation");
console.log(logger === logger2);

// Exercise 10:
console.log("Exercise 10");
const proxy = {
    target: null,
    get(target, prop) {
        console.log(`Getting ${prop} from ${target}`);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "age" && value < 0) {
            throw new Error("Age cannot be negative");
        }
        console.log(`Setting ${prop} to ${value} in ${target}`);
        target[prop] = value;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new Proxy(new Person("Maria", 12), proxy);
user.age = 15;
console.log(user.age);