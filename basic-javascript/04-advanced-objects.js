// Advanced Objects

// - prototypes and inheritance
// a) prototype - Today this concept frequently is not used.
// - Prototype is a special property that allows you to access the prototype of an object and add new properties or methods to it.
console.log("Prototype");
let person = {
    name: "Brandon",
    age: 18,
    city: "Santiago",
    greet() {
        console.log(`Hello ${this.name}`)
    }
};

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));
console.log(person.prototype); // undefined
person.sayAge = () => console.log(`Age: ${person.age}`);

console.log(person);
person.sayAge();

// b) Inheritance - by prototype chain
console.log("Inheritance");
let programmer = Object.create(person);
programmer.language = "JavaScript";
programmer.name = "Mauricio";
console.log(person.name); // don't change the name of the person object
console.log(person.language); // undefined

console.log(programmer.name); // change the name of the programmer object
console.log(programmer.age);
programmer.greet()
programmer.sayAge();

// Then the prototype chain is used to access the properties of the parent object.
// In this case, the prototype chain is used to access the properties of the person object.

// - Static methods and instance methods
function Person(name, age) {
    this.name = name;
    this.age = age;
} // Actually, this object is deprecated

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}

let myPerson = new Person("Brandon", 18);
myPerson.greet();

// - Advanced methods
// a) Assign
let personCore = {name: "Braulio"};
let personDetails = {age: 15, city: "Santiago"};

let personFull = Object.assign(personCore, personDetails);
console.log(personFull);

// b) keys, values, entries
console.log(Object.keys(personFull)); // arrays
console.log(Object.values(personFull)); // arrays
console.log(Object.entries(personFull)); //arrays of pair array
