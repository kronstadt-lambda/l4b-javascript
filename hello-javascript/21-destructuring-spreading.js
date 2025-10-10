/**
 * Destructuring is a JavaScript expression that allows us to extract data from arrays,
 * objects, and maps and set them into new, distinct variables.
 * It is commonly used in:
 * - Array destructuring
 * - Object destructuring
 * - Function parameter destructuring
 * - Nested destructuring
 * - Rest parameters
 */

// Array destructuring
console.log("Array destructuring");
let numbers = [1, 2, 3, 4, 5];
let [first, second, third] = numbers;
console.log(first, second, third);

[first, second, third, fourth = 0, five = 0, six = 0, seven] = numbers; // with default value
console.log(first, second, third, fourth, five, six, seven);

[first, second, , ] = numbers; // ignore third element
console.log(first, second);

[first, second, third, fourth = 0, ...rest] = numbers;
console.log(first, second, third, fourth);

// Object destructuring
console.log("Object destructuring");
let person = {name: 'John', age: 30};
let {name, age} = person;
console.log(name, age);
let {name2, age2, email="brasil@gmail.com"} = person;
console.log(name2, age2, email); // this property doesn't exist in person object so it will be set to default value

let {name: name3, age: age3, email: email2 = "brasil@gmail.com"} = person; // we can rename the property
console.log(name3, age3, email2);


// Nested destructuring
console.log("Nested destructuring")
const data = {
    user: {
        id: 1,
        details: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
};
const {user: {details: {firstName: userFirstName}}} = data;
console.log(userFirstName);

// Rest operator with destructuring
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

// Function parameter destructuring
// Examples of different parameter destructuring patterns
function printUserInfo({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUserInfo({name: 'John', age: 30});

function printUserDetails({name, address: {city, country} = {}}) {
    console.log(`Name: ${name}, City: ${city}, Country: ${country}`);
}
printUserDetails({name: 'John', address: {city: 'New York', country: 'USA'}});

function greetUser({name: userName, age: userAge = 18}) {
    console.log(`Hello ${userName}, you are ${userAge} years old`);
}
greetUser({name: 'John'});

function printCoordinates([x, y, z = 0]) {
    console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}
printCoordinates([10, 20]);

// Spreading for arrays
console.log("Spreading for arrays");
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let myArray3 = [...myArray1, ...myArray2];
console.log(myArray3);
let myArray4 = [-1, -2, -3, ...myArray2];
console.log(myArray4);

// Spreading for objects
console.log("Spreading for objects");
let myObject1 = {a: 1, b: 2, c: 5};
let myObject2 = {c: 3, d: 4};
let myObject3 = {...myObject1, ...myObject2};
console.log(myObject3);
let myObject4 = {e: 5, ...myObject2};
console.log(myObject4);