// Advanced Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const person = new Person("Braulio", 18);
person.greet();

person.sayAge = () => console.log(`Age: ${person.age}`);
person.sayAge();

// Inheritance
class Programmer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
    greet() {
        console.log(`Hello ${this.name}, I'm a ${this.language} programmer`);
    }
}

const programmer = new Programmer("Mauro", 28, "JavaScript");
programmer.greet();
// programmer.sayAge(); // this is not working because sayAge is not defined in the class Programmer

// Abstract classes: Use this to create classes that cannot be instantiated directly
class Pets {
    constructor(name) {
        if (new.target === Pets) {
            throw new Error("Cannot instantiate abstract class Pets");
        }
        this.name = name;
    }
    makeSound() {
        throw new Error("Method makeSound must be implemented in the child class");
    }
}

// Error
// const pet = new Pets("Dog"); // Error: Cannot instantiate abstract class Pets

// Polymorphism: Use this to create classes that can be used in different ways
class Dog extends Pets {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Woof!");
    }
}
class Cat extends Pets {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog("Rex");
const cat = new Cat("Luna");
dog.makeSound();
cat.makeSound();

// Mixins: Use this to add functionality to existing classes without modifying them
const FlyMixin = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
}
class Bird extends Pets {}
class Dragon extends Pets {}

Object.assign(Bird.prototype, FlyMixin);
Object.assign(Dragon.prototype, FlyMixin);

const bird = new Bird("Dove");
bird.fly();

const dragon = new Dragon("Dragon");
dragon.fly();

// Singleton pattern: Use this to ensure that a class has only one instance
// For example, a class that represents a global application state like user login status.
class Session {
    static instance = null;
    constructor(name) {
        if (Session.instance) {
            return Session.instance;
        }
        this.name = name;
        Session.instance = this;
    }
}

const session1 = new Session("Session 1");
const session2 = new Session('Session 2');
console.log(session1 === session2);

// Symbol: Use this to create unique identifiers for classes and properties. This is useful for creating private properties or methods.
// Symbol is similar to private definition with # in classes.
// Symbol is deprecated in ES6, and it is insecure
const ID = Symbol("id");
class User {
    constructor(name) {
        this[ID] = Math.random();
        this.name = name;
    }
}
const user1 = new User("John");
const user2 = new User("Jane");
console.log(user1[ID] === user2[ID]);

console.log(user1.name);
// console.log(user1.ID); // Error: ID is not defined
console.log(user1[ID]); // Then Symbol is semiprivate

// instanceof: for review instances of classes
class Car {}
const car = new Car();

console.log(car instanceof Car);

// create: other form to create instances of classes
class Car2 {
    constructor(name) {
        this.name = name;
    }
}
const anotherCar = Object.create(Car2.prototype);
console.log(anotherCar instanceof Car2);

// Proxy: use this to intercept and modify operations on objects
//
console.log("Proxy");
const proxy = {
    get(target, property) {
        // console.log(target); // BankAccount { balance: 100 }
        // console.log(`Getting ${property}`); // balance
        console.log(`Getting ${property}: ${target[property]}`)
        return target[property];
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("Balance cannot be negative");
        }
        console.log(`Setting ${property}: ${value}`);
        target[property] = value;

    },
}
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
}
const account = new Proxy(new BankAccount(100), proxy);
console.log(account.balance);
account.balance = 50;
console.log(account.balance);
// security checks and validations within the class!!!!



