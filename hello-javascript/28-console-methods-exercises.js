// Exercise 1:
console.log("Exercise 1");
function aFunction(bool) {
    console.log("This function does something");
    if (true) {
        console.error("There is an error", new Error("Error message"));
    }
}
aFunction(true)

// Exercise 2:
console.log("Exercise 2");
function aFunction2(bool) {
    console.log("This function does something");
    if (true) {
        console.warn("There is a warning");
        return "This is a return value with a warning";
    } else {
        return "This is a return value";
    }
}
let result = aFunction2(true)
console.log(result);

// Exercise 3:
console.log("Exercise 3");
function aFunction3(bool) {
    console.log("This function does something");
    if (true) {
        console.info("There is an information");
    } else {
        console.info("There is an information");
    }
}
aFunction3(true)

// Exercise 4:
console.log("Exercise 4");
let myTable = [
    {name: "John", age: 30, email: "jonnylat@gmail.com"},
    {name: "Mauricio", age: 15, email: "mauriciolat@gmail.com"},
    {name: "Pedro", age: 20, email: "pedritolat@gmail.com"}
]
console.table(myTable);

// Exercise 5:
console.log("Exercise 5");
let i = 0;
for (let person of myTable) {
    console.group(`Person ${++i}`);
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
    console.groupEnd();
}

// Exercise 6:
console.log("Exercise 6");
function summation(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.time("summation");
console.log(summation(10));
console.timeEnd("summation");
console.time("factorial");
console.log(factorial(10));
console.timeEnd("factorial");

// Exercise 7:
console.log("Exercise 7");
console.assert(factorial(10) > summation(10), "The summation is greater than the factorial, this is not possible");

// Exercise 8:
console.log("Exercise 8");
function countEvenNumbers(array) {
    console.group(`start evaluete even numbers`);
    for (let element of array) {
        if (element % 2 == 0) {
            console.count("Even numbers");
        }
    }
    console.groupEnd();
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countEvenNumbers(myArray);

// Exercise 9:
console.log("Exercise 9");
function summationForFactorial(number) {
    console.trace();
    return summation(factorial(number));
}
console.log(summationForFactorial(3));

// Exercise 10:
console.log("Exercise 10");
console.clear()