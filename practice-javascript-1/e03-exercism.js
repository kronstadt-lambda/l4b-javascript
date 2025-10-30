// Exercise 6
console.log("Exercise 6: Elyses Enchantments");

function getRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 4) {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

let randomItems = getRandomNumbers();
console.log("Items to array (IDs): ", randomItems);

const position = 2;
export function getItem(array, index) {
    return array[index];
}
console.log("Item at position ", position, ": ", getItem(randomItems, position));
const replacementCard = 6;
export function setItem(array, position, replacement) {
    array[position] = replacement;
    return array;
}
randomItems = setItem(randomItems, position, replacementCard);
console.log("Updated items to array (IDs): ", randomItems);

const newCard = 8;
export function insertItemAtTop(array, newCard) {
    array.push(newCard);
    return array;
}
randomItems = insertItemAtTop(randomItems, newCard);
console.log("Updated items to array (IDs): ", randomItems);

export function removeItem(array, position) {
    array.splice(position, 1);
    return array;
}
randomItems = removeItem(randomItems, position);
console.log("Updated items to array (IDs): ", randomItems);

export function removeItemFromTop(array) {
    array.pop();
    return array;
}
randomItems = removeItemFromTop(randomItems);
console.log("Updated items to array (IDs): ", randomItems);

export function insertItemAtBottom(array, newCard) {
    array.unshift(newCard);
    return array;
}
randomItems = insertItemAtBottom(randomItems, newCard);
console.log("Updated items to array (IDs): ", randomItems);

export function removeItemAtBottom(array) {
    array.shift();
    return array;
}
randomItems = removeItemAtBottom(randomItems);
console.log("Updated items to array (IDs): ", randomItems);

const stackSize = 4;
export function checkSizeOfStack(array, stackSize) {
    return array.length === stackSize;
}
console.log("Is stack size ", stackSize, "?: ", checkSizeOfStack(randomItems, stackSize));
