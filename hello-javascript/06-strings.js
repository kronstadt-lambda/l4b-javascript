// Strings

// Concatenation
let myName = "John";
let greeting = "Hello, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Length
console.log(greeting.length);

// Accessing characters
console.log(greeting[0]);
console.log(greeting[greeting.length - 1]);
console.log(greeting[12]); //out of bounds

// String methods
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.includes("John"));
console.log(greeting.startsWith("Hello"));
console.log(greeting.endsWith("!"));
console.log(greeting.repeat(3));
console.log(greeting.replace("John", "Jane"));
console.log(greeting.split(" "));
console.log(greeting.indexOf("Hello"));
console.log(greeting.slice(5, 8));

// Template literals
let message = `This is a template literal ...
also is a course of JavaScript` // with line breaks
console.log(message);

let greetingName = `Hello, your name is ${myName} and you are ${greeting.length} characters long!`;
console.log(greetingName);


