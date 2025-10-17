// Exercise 1:
console.log("Exercise 1");
function externalFunction() {
    return function internalFunction(word) {
        console.log(`This is an internal function: ${word}`);
    }
}

let myFunction = externalFunction();
myFunction("Hello");

// Exercise 2:
console.log("Exercise 2");
function totalMultiplication(a, b, c) {
    return a * b * c;
}

function curryMultiply(a, b, c) {
    return function (b) {
        return function (c) {
            return totalMultiplication(a, b, c);
        }
    }
}
const multiWith = curryMultiply(5);
console.log(multiWith(4)(3));
console.log(multiWith(5)(10));

// Exercise 3:
console.log("Exercise 3");
function powerNumber(number, exp) {
    if (exp <= 0) return 1;
    return number * powerNumber(number, exp - 1);
}

console.log(powerNumber(3, 4));

// Exercise 4:
console.log("Exercise 4");

function createCounter(initValue = 0) {
    let value = initValue;
    return {
        increment: function () {
            value++;
        },
        decrement: function () {
            value--;
        },
        getValue: function () {
            return value;
        }
    }
}
const counter = createCounter(10);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

// Exercise 5:
console.log("Exercise 5");
function sumManyTimes(multiplier, ...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number * multiplier;
    }
    return sum;
}
let result = sumManyTimes(-2, 1, 2, 3, 4, 5);
console.log(result);

// Exercise 6:
console.log("Exercise 6");
function summation(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
function processSum(numbers, callback) {
    const sum = summation(...numbers);
    callback(sum);
}
function multiplyByNegative(number) {
    console.log(number * -1);
}
function multiplyByTwo(number) {
    console.log(number * 2);
}
processSum([1, 2, 3, 4, 5], multiplyByNegative);
processSum([1, 2, 3, 4, 5], multiplyByTwo);

// Exercise 7:
console.log("Exercise 7");
function multiply(...numbers) {
    let result = 1;
    for (let number of numbers) {
        result *= number;
    }
    return result;
}
function partialMultiply(a, b, c) {
    return function(b, c) {
        return multiply(a, b, c);
    }
}
const partialWith = partialMultiply(5);
console.log(partialWith(4, 3));
console.log(partialWith(5, 10));

// Exercise 8:
console.log("Exercise 8");
function showMySonsNames(a, b, c, d, e) {
    for (let son of arguments) {
        console.log(son);
    }
}
const mySons = ["Juan", "Pedro", "Maria", "Ana", "Laura"];
showMySonsNames(...mySons);

// Exercise 9:
console.log("Exercise 9");
const threeSums = (a, b, c) => a+b+c;
console.log(threeSums(1, 2, 3));

// Exercise 10:
console.log("Exercise 10");
const box = {
    value: 42,
    // Use arrow: Inherit this from the box, no matter how setTimeout is called
    showLaterArrow() {
        setTimeout(() => {
            console.log("arrow:", this.value); // 42
        }, 100);
    },
    // Use normal function: This will be undefined, no matter how setTimeout is called
    showLaterFunction() {
        setTimeout(function () {
            console.log("function:", this.value); // undefined (en strict) o window.value
        }, 100);
    }
};
box.showLaterArrow();
box.showLaterFunction();