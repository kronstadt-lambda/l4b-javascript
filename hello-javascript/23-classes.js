// Classes
// Classes are templates or blueprints for creating objects. They encapsulate data and behavior
// that objects of that class will have. A class defines the structure and behavior that the
// objects of that type will share.

// Objects are instances of classes. While a class is the template, an object is a concrete
// instance created from that template with its own set of data.

// Key differences:
// - A class is a template/blueprint, while an object is an instance
// - You can create many objects from one class
// - Classes define structure and behavior, objects contain actual data
// - Classes are defined once, objects can be created multiple times

// Keywords:
// - class
// - constructor
// - this
// - new
// - extends
// - super
// Example:
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDescription() {
        return `This is a ${this.brand} ${this.model}`;
    }
}

// Creating objects (instances) from the class
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

console.log(car1.getDescription()); // This is a Toyota Corolla
console.log(car2.getDescription()); // This is a Honda Civic

//
class Person {
    constructor(name, age, alias = null) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Accessing properties and methods
const person1 = new Person("John", 30);
console.log( person1.alias);
console.log( person1['name']);
person1.greet();
const person2 = new Person("Maria", 25, "Maricucha");
console.log( person2.alias);
console.log( person2['name']);

// Private properties
// In JavaScript, private class fields/properties are defined using the '#' prefix
// These properties can only be accessed within the class definition
// They are truly private and cannot be accessed from outside the class

// Best practices for private properties:
// 1. Use # prefix for truly private properties that should never be accessed externally
// 2. Use underscore '_' prefix as a convention for "protected" properties (still accessible, but indicates "don't touch")
// 3. Group private fields at the top of the class definition
// 4. Create getter/setter methods if controlled access is needed
// 5. Document private fields in class documentation
// 6. Use TypeScript for better encapsulation if needed

class Vehicle {
    #engine = "V8";
    constructor(brand, model, color,engine) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.#engine = engine;
    }
    movement() {
        console.log("Moving");
    }
    #drive() {
        console.log("Driving");
    }
    #stop() {
        console.log("Stopping");
    }
    #start() {}

}
// Accessing private properties????
const vehicle1 = new Vehicle("Mercedes", "C63 AMG", "Black", "V8");
vehicle1.engine = "V12"; // this creates a new property engine in the object vehicle1 but don't replace private properties (#engine)
console.log(vehicle1.engine);

// Accessing private methods????
vehicle1.movement();
// vehicle1.stop(); // this is not working because stop is private

// Getters and Setters
// Getters and setters are used to control access to private properties and methods
// They are used to encapsulate data and behavior
class GetPerson {
    #name;
    #age;
    #user;
    #numBank;
    constructor(name, age, user, numBank) {
        this.#name = name;
        this.#age = age;
        this.#user = user;
        this.#numBank = numBank;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
    set numBank(numBank) {
        this.#numBank = numBank;
    }
    get user() {
        return this.#user;
    }
    set user(user) {
        this.#user = user;
    }
}
const newPerson = new GetPerson("John", 30, "admin", 123456789);
console.log(newPerson); // all is private

console.log(newPerson.name); // This allows read name property
newPerson.name = "Maria"; // This allows change name property

newPerson.user = "user"; // set user property
console.log(newPerson.user); // get user property

// Heritage (extends)
// The extends keyword is used to create a new class that inherits properties and methods from another class
// This is useful for creating more complex classes that have common functionality or properties
// The child class can then override or extend the functionality of the parent class

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal{
    constructor(name, old) {
        super(name);
        this.old = old;
    }

    run() {
        console.log("Dog runs.");
    }

    sound() {
        super.sound();
        console.log("Dog barks.");
    }

}
class Fish extends Animal{
    constructor(name, old) {
        super(name);
        this.old = old;
    }

    swim() {
        console.log("Fish swims.");
    }
}

const myDog = new Dog("Rex");
myDog.sound();
myDog.run();
const myFish = new Fish("Tuna", 5);
myFish.sound();
myFish.swim();

// Static methods
// Static methods are methods that are not associated with a specific instance of a class
// They are called directly on the class itself, not on an instance of the class
// Static methods are useful for creating utility functions or constants that can be used without creating an instance of the class

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(1, 2));; // Not necessary to create an instance of the class to use the static method