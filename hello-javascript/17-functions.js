// Functions

// Best Practices for Functions:
// 1. Use camelCase for function names (first word lowercase, subsequent words capitalized)
// 2. Use descriptive names that explain what the function does
// 3. Keep functions small and focused on a single task
// 4. Use proper indentation and consistent formatting
// 5. Add comments to explain complex logic
// 6. Use parameters with descriptive names
// 7. Return values should be clearly defined

// Function Declaration

// without return and parameters
function myFunc() {
    console.log("...");
}
for (let i = 0; i < 5; i++) {
    myFunc();
}

// without return but with parameters
function myFuncWithParams(name) {
    console.log(`Hello, ${name}`);
}
myFuncWithParams("Brayan");
myFuncWithParams("Maria");

// with return and parameters
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
console.log(calculateTotalPrice(10, 5));
console.log(calculateTotalPrice(15, 3));

function calculateTotalPriceDefault(price=0, quantity=0) {
    return price * quantity;
}
console.log(calculateTotalPriceDefault(10));
console.log(calculateTotalPriceDefault(15, 3));

// Anonymous Function
// This function is not declared with a name, but it is assigned to a variable.
const myFuncAnonymous = function (alias) {
    console.log(`Hello, ${alias}`);
}
myFuncAnonymous("bramau");

// Arrow Function
const getUserFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
console.log(getUserFullName("Brayan", "Maurer"));

const nameAndId = (name, id) => console.log(`${name} - ${id}`);
nameAndId("Brayan", 1);

// Function Expression
const validateUserInput = function (input) {
    return input !== null && input !== undefined && input !== '';
}

// Nesting Functions
// [USER REQUEST]: Is it good practice to build code with nested functions? If so, in what cases?
// Answer: Nested functions are useful when:
// 1. You need helper functions that are only used within the parent function
// 2. You want to create closures to maintain private state
// 3. You need to break down complex logic into smaller, reusable pieces

function externalFunction() {
    // Internal helper function that is only relevant within externalFunction
    function internalFunction() {
        console.log("Internal function");
    }

    internalFunction();
    console.log("External function");
}

externalFunction();

// Example of practical nested function usage
function calculateTotal(items) {
    // Helper function to validate each item
    function validateItem(item) {
        return item.price > 0 && item.quantity > 0;
    }

    // Helper function to calculate item subtotal
    function getItemTotal(item) {
        return item.price * item.quantity;
    }

    return items
        .filter(validateItem)
        .reduce((sum, item) => sum + getItemTotal(item), 0);
}

// Higher-order functions
function applyFunction(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function func (item) {
    console.log("Internal function applied to item: " + item);
}

applyFunction([1, 2, 3, 4, 5], func);

// For each function, we can see that:
// for each is a higher-order function that takes an array and a function as arguments.
// It iterates over each element in the array and calls the function with each element as an argument.
// The function is called with each element as an argument, allowing us to perform operations on each element.
// It doesn't return anything, but it does modify the original array.
let aArray = [1, 2, 3, 4, 5];
aArray.forEach((value) => console.log(`power: ${value*value}`));

// map
// map is a higher-order function that takes an array and a function as arguments.
// It iterates over each element in the array and calls the function with each element as an argument.
// The function is called with each element as an argument, allowing us to perform operations on each element.
// It returns a new array with the results of the function applied to each element.
const powerNumber = number => number * number;
let myArray = [1, 2, 3, 4, 5];
const myArrayPower = myArray.map(powerNumber);
console.log(myArrayPower);


