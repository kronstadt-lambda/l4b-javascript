// Exercise 10
console.log("Exercise 10: Lucky Numbers");

// Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean("false"));

// Converting to a number
let first = Number("123");
let second = Number("1,23");
let third = Number("0");
let fourth = Number({num: 123});
console.log(first); // 123
console.log(second); // NaN
console.log(third); // 0
console.log(fourth); // NaN

// Converting to a string
let str1 = String(123);
let str2 = String(1.23);
let str3 = String(false);
let str4 = String(null);
let str5 = String(undefined);
let str6 = String([1, 2, 3, "hello", null]);

console.log(str1); // "123"
console.log(str2); // "1.23"
console.log(str3); // "false"
console.log(str4); // "null"
console.log(str5); // "undefined"
console.log(str6); // "1,2,3,hello,"

console.log("Type of str1: ", typeof str1);
console.log("Type of str2: ", typeof str2);
console.log("Type of str3: ", typeof str3);
console.log("Type of str4: ", typeof str4);
console.log("Type of str5: ", typeof str5);
console.log("Type of str6: ", typeof str6);

// Type coercion in expressions
// Boolean context
let bool1 = "Hello" && 123; // both truthy, returns last operand
let bool2 = 0 || "World"; // first falsy, returns second operand
let bool3 = null ?? "Default"; // nullish coalescing, returns second operand

console.log(bool1); // 123
console.log(bool2); // "World"
console.log(bool3); // "Default"

const num = 0;
if (num) {
    // this block is NOT executed because 0 is falsy
}

// String context
let strConcat1 = "The answer is: " + 42; // number coerced to string
let strConcat2 = "Value: " + null; // null coerced to string
let strConcat3 = "Result: " + undefined; // undefined coerced to string

console.log(strConcat1); // "The answer is: 42"
console.log(strConcat2); // "Value: null"
console.log(strConcat3); // "Result: undefined"

// Numeric context
let numAdd1 = "5" - 2; // string coerced to number
let numAdd2 = "10" * "2"; // both strings coerced to numbers
let numAdd3 = "15" / 3; // string coerced to number

console.log(numAdd1); // 3
console.log(numAdd2); // 20
console.log(numAdd3); // 5

// 1.- Calculate the sum for the numbers on the slot machine
const array1 = [ 1, 2, 3];
const array2 = [ 0, 7];

export function twoSum(array1, array2) {
    const number1 = Number(array1.join(''));
    const number2 = Number(array2.join(''));
    return number1 + number2;
}

console.log("Sum of Two Arrays: ", twoSum(array1, array2));

// 2.- Determine if a number is a palindrome
export function luckyNumber(n) {
    const str = String(n);
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(luckyNumber(12321)); // true
console.log(luckyNumber(12345)); // false

// 3.- Generate a error message for invalid user input
export function errorMessage(input) {
    let strInput
    strInput = String(input).trim();
    if (strInput === "" || strInput === "null" || strInput === "undefined") {
        return "Required field";
    } else if ( Number.isNaN(Number(strInput)) || Number(strInput) === 0) {
        return "Must be a number besides 0";
    } else {
        return "";
    }
}

console.log(errorMessage("")); // "Required field"
console.log(errorMessage()); // "Required field"
console.log(errorMessage("123")); // ""
console.log(errorMessage("abc")); // "Must be a number besides 0"
console.log(errorMessage("0")); // "Must be a number besides 0"