// Operators

// Arithmetic operators
let a = 10;
let b = 20;

console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("b / a =", b / a); // Division
console.log("b % a =", b % a); // Modulus
console.log("a ** 2 =", a ** 2); // Exponentiation

a++
console.log("a =", a); // Increment
b--
console.log("b =", b); // Decrement

// Assignment operators
let c = 7;
console.log("c =", c); // Assignment
c += 2;
console.log("c += 2 :", c); // Addition assignment
c -= 2;
console.log("c -= 2 :", c); // Subtraction assignment
c *= 2;
console.log("c *= 2 :", c); // Multiplication assignment
c /= 2;
console.log("c /= 2 :", c); // Division assignment
c %= 2;
console.log("c %= 2 :", c); // Modulus assignment
c **= 2;
console.log("c **= 2 :", c); // Exponentiation assignment

// Comparison operators
console.log("a == b :", a == b); // Equality for value
console.log("a != b :", a != b); // Inequality for value
console.log("a == '10' :", a == "11"); // Equality for value is true but for type is false
console.log("a === '10' :", a === "11"); // Strict equality for value and type is false
console.log("a === b :", a === b); // Strict equality or for identity
console.log("a !== b :", a !== b); // Strict inequality or for identity
console.log("a > b :", a > b); // Greater than
console.log("a < b :", a < b); // Less than
console.log("a >= b :", a >= b); // Greater than or equal to
console.log("a <= b :", a <= b); // Less than or equal to
// particularity
console.log(0 == false);
console.log(1 == true);
console.log(2 == false);
console.log(0 == '');
console.log(0 == "");
console.log(0 == ' ');
console.log(0 == 'H');
console.log(0 === ' ');
console.log(null == undefined);
console.log(null === undefined);
// truthy values
/**
 * Truthy Values in JavaScript:
 * 1. All numbers except 0 (positive and negative)
 * 2. All strings except empty string ""
 * 3. The boolean true
 * 4. All objects (including empty objects {})
 * 5. All arrays (including empty arrays [])
 * 6. All functions (including empty functions)
 * 7. Date objects
 * 8. The special value Infinity and -Infinity
 * 9. The string "false"
 * 10. Any expression that evaluates to a non-zero number
 *
 * Examples:
 * - Boolean(42)         // true
 * - Boolean("hello")    // true
 * - Boolean({})         // true
 * - Boolean([])         // true
 * - Boolean(new Date()) // true
 * - Boolean(Infinity)   // true
 * - Boolean(() => {})   // true
 */
// Falsy values
/**
 * Falsy Values in JavaScript:
 * 1. false (boolean)
 * 2. 0 (number)
 * 3. -0 (negative zero)
 * 4. 0n (BigInt zero)
 * 5. "" (empty string)
 * 6. null
 * 7. undefined
 * 8. NaN (Not a Number)
 *
 * Examples:
 * - Boolean(0)          // false
 * - Boolean("")         // false
 * - Boolean(null)       // false
 * - Boolean(undefined)  // false
 * - Boolean(NaN)       // false
 * - Boolean(-0)        // false
 * - Boolean(0n)        // false
 *
 * These values are considered "falsy" because they evaluate
 * to false when used in a boolean context (like in if statements)
 */

// Logical operators
console.log("a && b :", a > c && b > a); // Logical AND
console.log("a || b :", a > c || b < c); // Logical OR
console.log("!a :", !(a > b)); // Logical NOT
console.log("a ?? b :", a ?? b); // Nullish coalescing

// ternary operators
const isRaining = true;
isRaining ? console.log("It's raining!") : console.log("It's not raining.");