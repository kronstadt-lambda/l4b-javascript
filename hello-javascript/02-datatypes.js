/**
 * JavaScript Data Types
 *
 * 1. Primitive Data Types:
 *    - String: textual data ("Hello", 'World')
 *    - Number: numeric data (42, 3.14)
 *    - Boolean: true/false
 *    - Undefined: declared but not assigned
 *    - Null: intentional absence of value
 *    - Symbol: unique identifier
 *    - BigInt: large integers
 *
 * 2. Reference (Non-Primitive) Data Types:
 *    - Object: collection of key-value pairs
 *    - Array: ordered list of values
 *    - Function: reusable code block
 *    - Date: date and time
 *    - RegExp: regular expressions
 */

// Examples of Primitive Types
const aString = "Brayan";
const aNumber = 42;
const aBoolean = true;
let anUndefined;
const aNull = null;
const aSymbol = Symbol('description');
const aBigInt = BigInt(9007199254740991n);
const otherBigInt = 9007199254740991n;

// Examples of Reference Types
const anObject = {key: 'value'};
const anArray = [1, 2, 3];
const aFunction = () => console.log('Hello');
const aDate = new Date();
const aRegExp = /pattern/;

/**
 * Key Differences:
 * - Primitive types store the actual value
 * - Reference types store a reference (address) to the value
 * - Primitive types are immutable
 * - Reference types can be modified after creation
 */

// Print the data types of the variables
console.log("aString: ", typeof aString);
console.log("aNumber: ", typeof aNumber);
console.log("aBoolean: ", typeof aBoolean);
console.log("anUndefined: ", typeof anUndefined);
console.log("aNull: ", typeof aNull);
console.log("aSymbol: ", typeof aSymbol);
console.log("aBigInt: ", typeof aBigInt);
console.log("otherBigInt: ", typeof otherBigInt);
console.log("anObject: ", typeof anObject);
console.log("anArray: ", typeof anArray);
console.log("aFunction: ", typeof aFunction);