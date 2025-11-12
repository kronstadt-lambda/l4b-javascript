// Exercise 13
console.log("Exercise 13: Train Driver");

`
JavaScript has a built-in ... operator that makes it easier to work with indefinite numbers of elements.
Depending on the context, it's called either a rest operator or spread operator.

// Rest operator
* Rest elements
When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. 
The three dots together with a variable name is called a rest element. 
It collects zero or more values, and stores them into a single array.

const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

console.log(a); // 0
console.log(b); // 1
console.log(everythingElse); // 1, 2, 3, 5, 8

Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma.
It must be the last element in a destructuring assignment. The example below throws a SyntaxError:

const [...items, last] = [2, 4, 8, 16] // syntaxError

* Rest properties
Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.

const { street, ...address } = {
  street: 'Platz der Republik 1',
  postalCode: '11011',
  city: 'Berlin',
};
console.log(street); // 'Platz der Republik 1'
console.log(address); // { postalCode: '11011', city: 'Berlin' }

// Rest parameters
When ... appears in a function definition next to its last argument, that parameter is called a rest parameter.
It allows the function to accept an indefinite number of arguments as an array.

function concat(...strings) {
  return strings.join(' ');
}
console.log(concat('Hello', 'world!')); // 'Hello world!'
console.log(concat('Hello'); // 'Hello'

// Spread
* Spread elements
When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. 
Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];
console.log(oneToTen); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];
console.log(woow); // ['A', 1, 2, 3, 4, 5, 'B', 'C', 'D', 'E', 1, 2, 3, 4, 5, 42]

* Spread properties
Similarly to arrays, the spread operator can also be used to copy properties from one object to another.
let address = {
  postalCode: '11011',
  city: 'Berlin',
};
address = { ...address, country: 'Germany' };
console.log(address); // { postalCode: '11011', city: 'Berlin', country: 'Germany' }

`

// 1. Create a list of all wagons
function getListOfWagons(...wagons) {
    return wagons;
}
console.log("List of wagons' ID: ", getListOfWagons(1, 7, 12, 3, 14, 8, 5));

// 2. Move the first two elements to the end of the array
const eachWagonsID = [2, 5, 1, 7, 4, 12, 6, 3, 13];
function fixListOfWagons(wagons) {
    const [first, second, ...rest] = wagons;
    return [...rest, first, second];
}
console.log("Fixed list of wagons' ID: ", fixListOfWagons(eachWagonsID));

// 3. Add missing values
const newEachWagonsID = [1, 5, 20, 7, 4, 8];
const missingWagons = [3, 17, 6, 15];
function correctListOfWagons(eachWagonsID, missingWagons) {
    const [first, ...rest] = eachWagonsID;
    return [first, ...missingWagons, ...rest];
}
console.log("Corrected list of wagons' ID: ", correctListOfWagons(newEachWagonsID, missingWagons));

// 4. Extend routing information
const route = { from: 'Berlin', to: 'Hamburg' };
const moreRouteInformation = { length: '100', speed: '50' };
function extendRouteInformation(route, moreRouteInformation) {
    return { ...route, ...moreRouteInformation };
}
console.log("Extended route information: ", extendRouteInformation(route, moreRouteInformation));

// 5. Separate arrival time from routing information
const routeInformation = {
    from: 'Berlin',
    to: 'Hamburg',
    length: '100',
    timeOfArrival: '10:10',
};
function separateTimeOfArrival(routeInformation) {
    const { timeOfArrival, ...routeWithoutTime } = routeInformation;
    return [timeOfArrival, routeWithoutTime];
}
console.log("Time of arrival and route information: ", separateTimeOfArrival(routeInformation));



