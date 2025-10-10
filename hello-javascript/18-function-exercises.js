// Exercise 1
console.log("Exercise 1");
const suma = (a=0, b=0) => a + b;
console.log(`The sum is : ${suma(2, 3)}`);
console.log(`The sum is : ${suma(2)}`);

// Exercise 2
console.log("Exercise 2");
let anArray = [1, 2, -30, 4, 5, 60, 7, 8, 90, 10];
function maxArray(array) {
    let max = array[0];
    for (let number of array) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}
console.log(`The max value is : ${maxArray(anArray)}`);

// Exercise 3
console.log("Exercise 3");
let aString = "Hello world";
function numVowels(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let letter of string) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(`The number of vowels is : ${numVowels(aString)}`);

// Exercise 4
console.log("Exercise 4");
let listStrings = ["World", "Cow", "Milk", "Apple", "Banana", "Orange", "Pear", "Grape", "Strawberry", "Watermelon"];
function convertToUpperCase(list) {
    let newList = [];
    for (let string of list) {
        newList.push(string.toUpperCase());
    }
    return newList;
}
console.log(`The list in uppercase is : ${convertToUpperCase(listStrings)}`);

// Exercise 5
console.log("Exercise 5");
let aNumber = 12;
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(`The number ${aNumber} is ${isPrime(aNumber) ? "prime" : "not prime"}`);

// Exercise 6
console.log("Exercise 6");
let firtsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let secondArray = [10, 19, 18, 7, 6, 5, 14, 13, 12, 11];
function commonElements(array1, array2) {
    let common = [];
    for (let number of array1) {
        if (array2.includes(number)) {
            common.push(number);
        }
    }
    return common;
}
console.log(`The common elements are : ${commonElements(firtsArray, secondArray)}`);

// Exercises 7
console.log("Exercises 7");
let otherArray = [-21, -2, 3, -40, 5, 65, 78, 8, 9, 10];
function sumEvenElements(array) {
    let sum = 0;
    for (let number of array) {
        if (number % 2 == 0) {
            sum += number;
        }
    }
    return sum;
}
console.log(`The sum of even elements is : ${sumEvenElements(otherArray)}`);

// Exercise 8
console.log("Exercise 8");
let aNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const powerArray = aNumberArray.map(number => number ** 2);
console.log(`The power of each element is : ${powerArray}`);

// Exercise 9
console.log("Exercise 9");
let otherString = "Hello world!";
function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log(`The reverse string is : ${reverseString(otherString)}`);

// Exercise 10
console.log("Exercise 10");
let number = 5;
const factorial = (number) => {
    if (number == 0 || number == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(`The factorial of ${number} is : ${factorial(number)}`);