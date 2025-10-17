/**
 * Regular Expressions (Regex)
 *
 * Regular expressions are patterns used to match character combinations in strings.
 * They provide a powerful way to search, match, and manipulate text.
 *
 * Common uses include:
 * - Pattern matching and validation (email, phone numbers, etc.)
 * - Text search and replace operations
 * - String parsing and extraction
 * - Input validation and formatting
 * - Data cleaning and preprocessing
 *
 * Example patterns:
 * - Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 * - Phone: /^\+?[\d\s-]{10,}$/
 * - URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
 */

// Syntax

const myRegex = /abc/; // always between '/ /'
const otherRegex = RegExp('abc'); // other form of create regex
const text = "Hello abc JavaScript";
const otherText = "Hello JavaScript";

// test
console.log(".test");
console.log(myRegex.test(text));    // search in text and return true or false
console.log(myRegex.test(otherText));
console.log(otherRegex.test(text));

const aText = "A new text with 21";
const aRegex = /\d/; // match any digit
console.log(aRegex.test(aText));
const aRegex2 = /[0-2]+/; // match any digit between 0 and 2
const aRegex3 = /[0-3]/;
console.log(aRegex2.test(aText));
console.log(aRegex3.test(aText));

// replace
console.log(".replace");
const myRegex2 = /JavaScript/;
const aRegex4 = /\d+/g;
console.log("Hello JavaScript".replace(myRegex2, "TypeScript"));
console.log("I am counting 1, 2, 3, ..........".replace(aRegex4, "[numero]"));

// exec: return the match
console.log(".exec");
console.log(myRegex.exec(text));
console.log(myRegex.exec(otherText));
const aText2 = "I am counting 1, 2, 3, ..... 3, 2, 1";
console.log(aText2.replace(aRegex4, "[number]"));
console.log(aRegex4.exec(aText2));

while ((match = aRegex4.exec(aText2)) !== null) {
    console.log(match);
}

// more info in: https://regex101.com/



