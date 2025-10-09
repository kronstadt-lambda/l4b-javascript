/**
 * In JavaScript, there are three reserved words for declaring variables:
 *
 * 1. var - Function-scoped or globally-scoped variable declaration (legacy)
 * 2. let - Block-scoped variable declaration that can be reassigned
 * 3. const - Block-scoped constant declaration that cannot be reassigned
 */


// var
console.log(helloWorld);
/**
* Best Practices for Variable Naming (var):
* 1. Use descriptive and meaningful names
* 2. Start with a lowercase letter
* 3. Avoid single letter names (except for loops)
* 4. Don't use reserved keywords
* 5. Use lowerCamelCase convention
* 6. Avoid starting with numbers
* 7. Only use letters, numbers, and underscores
*
* Lower Camel Case:
* - First word starts with lowercase
* - Each subsequent word starts with uppercase
* - No spaces or special characters
* - Examples: firstName, lastName, emailAddress, phoneNumber
*/

var helloWorld = "Hello World!";
console.log(helloWorld);

helloWorld = "Hello World! Again";
console.log(helloWorld);

/**
 * ⚠️ WARNING ⚠️
 * The 'var' keyword is considered legacy and is not recommended for modern JavaScript development.
 * Issues with 'var':
 * - Variables can be accessed before declaration (hoisting), leading to unexpected behavior
 * - No block scope, only function scope which can cause variable leaks
 * - Can be redeclared, potentially causing naming conflicts
 * - Makes code harder to maintain and debug
 *
 * 🔍 Recommendation: Use 'let' for variables that need reassignment
 * ✨ Best Practice: Use 'const' for values that won't be reassigned
 */

// let

/**
 * Variables created with 'let' are only accessible within the block they are defined in,
 * unlike 'var' which is function-scoped or globally-scoped.
 * Both 'let' and 'var' variables can be reassigned to new values.
 */

// console.log(helloJavaScript); // ReferenceError: helloJavaScript is not defined
let helloJavaScript = "Hello JavaScript!";
console.log(helloJavaScript);

helloJavaScript = "Hello JavaScript! Again";
console.log(helloJavaScript);


// const

/**
 * Best Practices for Variable Naming (const):
 * 1. Use UPPER_SNAKE_CASE for constants that are truly immutable and represent configuration values
 * 2. Use lowerCamelCase for constants that are objects, arrays, or functions
 * 3. Make names descriptive and meaningful
 * 4. Prefix with type when beneficial (e.g., MIN_COUNT, MAX_ITEMS)
 * 5. Group related constants together
 * 6. Avoid abbreviations unless they're well-known
 * 7. Consider adding type information for clarity (e.g., TIME_DELAY_MS)
 *
 * Examples:
 * - MAX_RETRIES = 3
 * - API_BASE_URL = 'https://api.example.com'
 * - defaultConfig = { theme: 'dark' }
 * - userCallback = () => {}
 */

const MAX_RETRIES = 3;
const API_BASE_URL = 'https://api.example.com';
const defaultConfig = { theme: 'dark' };
const userCallback = () => {};
const helloUltimateJavaScript = "Hello Ultimate JavaScript!";
console.log(helloUltimateJavaScript);

/**
 * Important Note about 'const' and Reference Types:
 * While 'const' prevents reassignment of the variable itself, it does not make its contents immutable.
 * For reference types (objects, arrays), the internal values can still be modified:
 * - You cannot reassign the variable to a new reference
 * - You can modify the contents of the referenced object or array
 */

// Example with arrays
const numbers = [1, 2, 3];
numbers.push(4);        // This works
console.log(numbers);   // [1, 2, 3, 4]
// numbers = [5, 6, 7]; // This would throw an error

// Example with objects
const person = {name: "John"};
person.age = 30;        // This works
console.log(person);    // { name: "John", age: 30 }
// person = { name: "Jane" }; // This would throw an error

