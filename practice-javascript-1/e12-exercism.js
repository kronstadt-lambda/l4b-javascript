// Exercise 12
console.log("Exercise 12: Elyses destructured Enchantments");

`
// Array destructuring
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;
console.log(venus); // Output: 0
console.log(mars);  // Output: 2
console.log(neptune); // Output: 14

In short:
* The syntax allows for naming positioned elements in an array, as well as swapping variables using re-assignment.
* Destructuring syntax is available inside function parameters, and is available on any iterable.
* Leaving a position unnamed (by not writing any variable name) silently ignores that position.

// Object destructuring
In JavaScript, there is also destructuring syntax to extract properties from an object and assign them to distinct variables.
const weather = {
  sun: '☀️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_cloud: '⛅',
  sun_behind_large_cloud: '🌥️',
  sun_behind_rain_cloud: '🌦️',
  cloud: '☁️',
  cloud_with_rain: '🌧️',
  cloud_with_snow: '🌨️',
  cloud_with_lightning: '🌩️',
  cloud_with_lightning_and_rain: '⛈️',
};
const { sun, cloud, cloud_with_lightning: thunder } = weather;

console.log(sun); // Output: ☀️
console.log(cloud); // Output: ☁️
console.log(thunder); // Output: 🌩️

In short:
* The syntax allows for both extracting properties as well as extracting and renaming them.
* Destructuring syntax is available inside function parameters.
`

// 1. Get the first card
const deck1 = [5, 9, 7, 1, 8];
function getFirstCard(deck) {
    const [firstCard, ...restOfDeck] = deck;
    return firstCard;
}
console.log("First card in [5, 9, 7, 1, 8]: ", getFirstCard(deck1));

// 2. Get the second card
const deck2 = [3, 2, 10, 6, 7];
function getSecondCard(deck) {
    const [, secondCard, ...restOfDeck] = deck;
    return secondCard;
}
console.log("Second card in [3, 2, 10, 6, 7]: ", getSecondCard(deck2));

// 3. Swap two cards
const deck3 = [4, 8];
function swapTopTwoCards(deck) {
    const [firstCard, secondCard] = deck;
    return [secondCard, firstCard];
}
console.log("Swap top two cards in [4, 8]: ", swapTopTwoCards(deck3));

// 4. Shit three cards around
const deck4 = [2, 6, 10];
function shiftThreeCardsAround(deck) {
    const [firstCard, secondCard, thirdCard] = deck;
    return [secondCard, thirdCard, firstCard]
}
console.log("Shift three cards in [2, 6, 10]: ", shiftThreeCardsAround(deck4));

// 5. Pick the named pile
const deck5 = [5, 4, 7, 10];
const chosen1 = [5, 4];
const disregarded1 = [7, 10];

function pickNamedPile({ chosen }) {
    return chosen;
}
console.log(pickNamedPile({ chosen: chosen1, disregarded: disregarded1 }));
// 6. Swap the picked pile
const deck6 = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

function swapNamedPile({ chosen, disregarded }) {
    return { chosen: disregarded, disregarded: chosen };
}
console.log(swapNamedPile({ chosen, disregarded }))
