/** Number
 * Number is a primitive type that represents numeric values.
 * @type {number}
 */

let simpleNumber = 123;
let myNumber = Number(123);
// both are the same
// temporal wrapping allows to use methods on the number

// properties
console.log("Properties");
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

// methods
console.log("Methods");
let decNumber = 23.456;
let intNumber = 123;

console.log(decNumber.toExponential(10), "  Type: ", typeof decNumber.toExponential(10));
console.log(decNumber.toFixed(2), "  Type: ", typeof decNumber.toFixed(2));
console.log(decNumber.toPrecision(4), "  Type: ", typeof decNumber.toPrecision(2));
console.log(intNumber.toString(2), "  Type: ", typeof decNumber.toString(2));

console.log(Number.isFinite(decNumber)); //(no NaN, ni Infinity, ni -Infinity).
console.log(Number.isInteger(intNumber));
console.log(Number.isNaN(decNumber));
console.log(Number.isSafeInteger(intNumber));

console.log(Number.parseInt("125", 10));
console.log(Number.parseFloat("125.678"));

// Disclaimer
/**
 * NaN vs null (undefined) differences:
 *
 * NaN (Not a Number):
 * - Type: Number
 * - Represents an invalid numerical operation result
 * - Used when mathematical operations fail or number conversion is invalid
 * - Example: parseInt("hello") returns NaN
 *
 * null (undefined):
 * - Type: Object (special primitive value)
 * - Represents intentional absence of any object value
 * - Used when explicitly wanting to indicate no value is assigned
 * - Example: let user = null; // user doesn't exist yet
 */

/** RegExp
 * RegExp: Regular Expression
 */

// Basic RegExp patterns
let textToTest = "Hello World 123";
let pattern1 = /\d+/;           // matches one or more digits
let pattern2 = /[A-Z]/;         // matches any uppercase letter
let pattern3 = /world/i;        // case-insensitive match

console.log("RegExp test() examples:");
console.log(pattern1.test(textToTest));  // true
console.log(pattern2.test(textToTest));  // true
console.log(pattern3.test(textToTest));  // true

// Complex RegExp patterns with exec()
let text = "My email is test@example.com and phone is 123-456-7890";
let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let phonePattern = /(\d{3})-(\d{3})-(\d{4})/g;

console.log("RegExp exec() examples:");
console.log(emailPattern.exec(text));
console.log(phonePattern.exec(text));

/**
 * Common RegExp Patterns:
 * \d - matches any digit (0-9)
 * \w - matches any word character (a-z, A-Z, 0-9, _)
 * \s - matches any whitespace character
 * + - matches one or more occurrences
 * * - matches zero or more occurrences
 * ? - matches zero or one occurrence
 * [] - matches any character within brackets
 * [^] - matches any character not within brackets
 * ^ - matches start of string
 * $ - matches end of string
 * . - matches any character except newline
 * | - alternation (OR)
 */
