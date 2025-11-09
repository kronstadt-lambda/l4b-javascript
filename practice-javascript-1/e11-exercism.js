// Exercise 11
console.log("Exercise 11: Elyses analytic enhancements");

`
Here is a comparison between a function declaration and an arrow function.

function addUpTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addUpTwoNumbers = (num1, num2) => num1 + num2;
const square = num => num * num;

Arrow functions are often used to define short callback functions directly in the function call.

applyToSquare(number => number * number);

Some other helpful built-in methods that are available to analyze an array are shown below

# includes
const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false

# every
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true

# some
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true

# find
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1

# findIndex
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 4);
// => 2
`

// 1. Find the position of a card
const arrangement1 = [9, 7, 3, 2];
const card1 = 2;
const getCardPosition = (arrangement, card1) => {
    return arrangement.findIndex((num) => num === card1);
}
console.log("Position of card 2 in [9, 7, 3, 2]: ", getCardPosition(arrangement1, card1));

// 2. Determine if a card is in the hand
const arrangement2 = [2, 3, 4, 5];
const card2 = 3;
const doesStackIncludeCard = (arrangement2, card2) => {
    return arrangement2.includes(card2);
}
console.log("Does arrangement [2, 3, 4, 5] include card 3?: ", doesStackIncludeCard(arrangement2, card2));

// 3. Determine if each card is even
const arrangement3 = [2, 4, 6, 7];
const isEachCardEven = (arrangement3) => {
    return arrangement3.every((num) => num % 2 === 0);
}
console.log("Are all cards in [2, 4, 6, 7] even?: ", isEachCardEven(arrangement3));

// 4. Check if the stack contains an odd-value card
const arrangement4 = [3, 2, 6, 4, 8];
const doesStackContainOddCard = (arrangement4) => {
    return arrangement4.some((num) => num % 2 !== 0);
}
console.log("Does arrangement [3, 2, 6, 4, 8] contain an odd card?: ", doesStackContainOddCard(arrangement4));

// 5. Get the first odd card from the stack
const arrangement5 = [4, 2, 8, 7, 9];
const getFirstOddCard = (arrangement5) => {
    return arrangement5.find((num) => num % 2 !== 0);
}
console.log("First odd card in [2, 4, 6, 7, 8]: ", getFirstOddCard(arrangement5));

// 6. Determine the position of the first card that is even
const arrangement6 = [5, 2, 3, 1];
const getFirstEvenCardPosition = (arrangement6) => {
    return arrangement6.findIndex((num) => num % 2 === 0);
}
console.log("Position of first even card in [5, 2, 3, 1]: ", getFirstEvenCardPosition(arrangement6));