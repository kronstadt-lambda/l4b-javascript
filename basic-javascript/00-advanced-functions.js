/**
 * Functions in JavaScript:
 * JavaScript functions are first-class objects with several powerful characteristics:
 * 1. Can be assigned to variables and stored in data structures
 * 2. Can be passed as arguments to other functions (callbacks)
 * 3. Can be returned from other functions (closures)
 * 4. Can have properties and methods attached to them
 * 5. Can be created dynamically using function constructors
 * 6. Support both function declarations and expressions
 * 7. Can be defined inside other functions (nested functions)
 * 8. Can capture their creation context (lexical scope)
 */

const greet = function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Brayan");

function processGreeting(greetFunction, name) {
    greetFunction(name);
}
processGreeting(greet, "John");

function returnGreet() {
    return function greet(name) {
        console.log(`Hello, ${name}!`);
    }
}
const greetFunction = returnGreet();
greetFunction("Alice");

/**
 * Arrow Functions:
 * - Shorter syntax for creating functions
 * Exist types of arrow functions:
 * 1. Arrow functions with implicit return
 * 2. Arrow functions with explicit return
 * This lexically binds the 'this' value to the enclosing scope
 */

// Arrow function with implicit return
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// Arrow function with explicit return
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));

// This lexically
const handler = {
    event: "click",
    handleEvent: function() {
        console.log("Handling event:", this.event);
    },
    arrowArrowEvent: () => {
        console.log("Handling event:", this.event);
    }
};
handler.handleEvent();
handler.arrowArrowEvent();

/**
 * IIFE
 * Immediately Invoked Function Expression
 * - IIFE classic: function() {}()
 * This IIFE is executed immediately after it is defined.
 * In this IIFE is necessary to use ; to separate the function declaration and the invocation.
 *
 * The IIFE is a good way to avoid polluting the global scope and to run code immediately after its definition.
 */

// IIFE classic:
(function() {
    console.log("IIFE classic");
})();
(() => {
    console.log("IIFE arrow");
})();

/**
 * Rest parameters (...)
 * - ...rest: allows you to collect multiple arguments into an array
 * rest generate an array with the rest of the arguments
 */
console.log("Rest parameters");
function sum (...numbers) {
    let result = 0;
    for (let number of numbers) { // array destructuring or iterator
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1,3));

/**
 * Spread (...)
 * - ...spread: allows you to expand elements of an array or iterable object into individual arguments
 */
console.log("Spread");
const numbers = [1, 2, 3, 4, 5];
function otherSumWithSpread(a, b, c,) {
    return a + b + c;
}
otherSumWithSpread(numbers[0], numbers[1], numbers[2]); // array destructuring
otherSumWithSpread(...numbers); // spread operator like destructuring operator: best practice
// ...spread ignores the rest of the arguments

/**
 * Closures
 * - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 *
 * Key potentials and meanings of closures:
 * 1. Data Privacy: Creates private variables and methods not accessible from outside
 * 2. State Preservation: Maintains state between function calls without using global variables
 * 3. Factory Functions: Generates functions with customized behavior
 * 4. Module Pattern: Enables encapsulation and information hiding
 * 5. Partial Application: Allows creating new functions with some arguments pre-set
 * 6. Memoization: Can cache function results for better performance
 * 7. Event Handlers: Maintains access to outer scope in async operations
 * 8. Iterators: Creates functions that remember their state between calls
 */
console.log("Closures");
function createCounter() {
    let count = 0;
    return function increment() {
        count++;
        console.log(`count: ${count}`);
    }
}
const counter = createCounter();
counter();
counter();
counter();

/**
 * Recursivity
 * - A recursive function is a function that calls itself.
 * - Recursion is a way to solve problems by breaking them down into simpler subproblems.
 * - Recursion can be used to solve problems that have a recursive structure, such as tree traversal or graph traversal.
 * - Recursion can also be used to solve problems that have a loop structure, such as factorial calculation.
 * - Recursion can be used to solve problems that have a loop structure, such as factorial calculation.
 */
console.log("Recursion");
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
// console.log(factorial(-10)); // RangeError: Maximum call stack size exceeded

/**
 * Partial Functions
 * - A partial function is a function that only accepts a subset of its arguments.
 */
function partialSum(a, b, c) {
    return function (b, c) {
        return sum(a, b, c);
    }
}
const partialWith = partialSum(1); // Fixed parameter
console.log(partialWith(2, 3)); // changing parameter
console.log(partialWith(8, 9)); // changing parameter

/**
 * Currying
 * - Currying is a technique for converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
 */
console.log("Currying");
function currySum(a) {
    return function(b) {
        return function(c) {
            return sum(a, b, c);
        }
    }
};

const curryWith = currySum(1)(2); // Fixed parameter
console.log(curryWith(3)); // changing parameter
console.log(curryWith(8)); // changing parameter

/**
 * Callbacks
 * - Callbacks are functions passed as arguments to other functions to be executed later.
 */

console.log("Callbacks");
function processData(data, callback) {
    const result = sum(...data)
    callback(result);
}
function printData(result) {
    console.log(`print : ${result}`);
}
function printData2(result) {
    console.log(`other print : ${result}`);
}

processData([1, 2, 3], printData);
processData([1, 2, 3], printData2);
processData([1, 2, 3], (result) => console.log(`custom print : ${result}`));