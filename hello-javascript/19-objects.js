// objects

// Syntax
// the instance is unique
let person = {
    name: "Brandon",
    age: 18,
    city: "Santiago"
}

// Accessing Properties
// . (dot)
console.log(person.name);
console.log(person.age);
console.log(person.city);
// [] (bracket)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// Modifying Properties
person.name = "Mauricio";
console.log(person.name);
console.log(typeof person.age);
person.age = "20";
console.log(typeof person.age);

// Deleting Properties
delete person.city;
console.log(person.city);
console.log(person)

// New properties
person["city"] = "Santiago";
person.country = "Chile";
person.email = "brandmauricio@gmail.com";
console.log(person);

// Methods (functions)
let otherPerson = {
    name: "Maria",
    age: 20,
    city: "Santiago",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
otherPerson.greet();

// Nesting Objects
console.log("Nesting Objects");
let aGroup = {
    name: "Group A",
    members: [
        {name: "John", age: 20, isAdmin: function () {console.log(`${this.name} is admin of ${aGroup.name}`)}},
        {name: "Jane", age: 25},
        {name: "Bob", age: 30}
    ]
}
console.log(aGroup.members[0].name);
aGroup.members[0].isAdmin();
console.log(aGroup.members[0].age);
console.log(aGroup.members[1].name);
console.log(aGroup.members[1].age);

// Equivalences between Objects
let aPerson1 = {
    name: "Brandon",
    age: 18,
    city: "Santiago"
}
let aPerson2 = {
    name: "Brandon",
    age: 18,
    city: "Santiago"
}
console.log(aPerson1);
console.log(aPerson2);
console.log(aPerson1 == aPerson2); // simple comparison
console.log(aPerson1 === aPerson2); // deep comparison
// These comparisons return false because they are comparing memory references, not values or types.
// Both objects point to different memory locations even though they have the same content.
console.log(aPerson1.name == aPerson1.name);

// Iterating Objects
// Note that keywords access to an element are 'in'
console.log("Iterating Objects");
for (let key in aPerson1) {
    console.log(`${key}: ${aPerson1[key]}`);
}
for (let key in otherPerson) {
    console.log(`${key}: ${otherPerson[key]}`);
}
console.log(otherPerson.age);

// functions like objects
// DISCLAIMER: While it's possible to use functions as object constructors (as shown below),
// it's recommended to use ES6 Classes instead for creating generic object structures.
// Classes provide better syntax, built-in features, and are the modern standard for
// object-oriented programming in JavaScript.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let myFavoritePerson = new Person("Fiorella", 35);
console.log(myFavoritePerson.name);
console.log(myFavoritePerson.age);

