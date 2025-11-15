// Exercise 14
console.log("Exercise 14: Elyses Looping Enchantments");

`
When working with arrays, you sometimes want to execute code for each value in the array. This is called iterating or
looping over the array.

* The 'for' Loop
The most basic way to iterate over an array is to use a 'for' loop, see Concept For Loops.

const numbers = [6.0221515, 10, 23];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// => 6.0221515
// => 10
// => 23

* The 'for...of' Loop
When you want to work with the value directly in each iteration and do not require the index at all, you can use a
'for...of' loop.
'for...of' works like the basic for loop shown above, but instead of having to deal with the index as a variable
in the loop, you are provided with the value directly.

const numbers = [6.0221515, 10, 23];
for (const number of numbers) {
  console.log(number);
}
// => 6.0221515
// => 10
// => 23

* The 'forEach' Method
Every array includes a forEach method that can be used to loop over the elements in the array.
'forEach' accepts a callback as a parameter. The callback function is called once for each element in the array.
The current element, its index and the full array are provided to the callback as arguments. Often, only the current 
element or the index are used.

const numbers = [6.0221515, 10, 23];

numbers.forEach((number, index) => console.log(number, index));
// => 6.0221515 0
// => 10 1
// => 23 2

There is no way to stop the iteration once the forEach loop was started. The statements break and continue do not 
exist in this context.
`

// 1. Determine how many cards of a certain type are in the deck
const cardType = 3;
const numbers1 = [1, 2, 3, 4];
function cardTypeCheck(deck, type) {
    let count = 0;
    deck.forEach((card) => {
        if (card === type) {
            count++;
        }
    });
    return count;
}


// 2.  Determine how many odd or even cards there are
const numbers2 = [1, 2, 3, 1, 5, 6];
function determineOddEvenCards(deck, boolean) {
    let count = 0;
    deck.forEach((card) => {
        if (boolean && card % 2 === 0) {
            count++;
        } else if (!boolean && card % 2 !== 0) {
            count++;
        }
    });
    return count;
}
console.log("Count of card type 3: ", cardTypeCheck(numbers1, cardType));
console.log("Count of odd cards: ", determineOddEvenCards(numbers2, true));
console.log("Count of even cards: ", determineOddEvenCards(numbers2, false));