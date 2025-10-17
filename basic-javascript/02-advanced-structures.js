// Advanced Structures

// advanced arrays
// - functional methods
// a) forEach
let myArray = [["John", 23], ["cat", 2], ["dog", 3]];
myArray.forEach(element=> console.log(element));
// b) map
let myArray2 = myArray.map(element=> element[0]);
console.log(myArray2);
// c) filter (with conditional)
let myArray3 = myArray.filter(element=> element[1] > 2);
console.log(myArray3);
// d) reduce
let myReduce = myArray.reduce((accumulator, currentValue)=> accumulator + currentValue[1], 10);
console.log(myReduce);

// - manipulation
// a) flat
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
let flatArray = nestedArray.flat(Infinity); // Infinity means infinite levels of nesting
console.log(flatArray);

// b) flatMap
function sumElements(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (Array.isArray(number)) {
            sum += sumElements(...number);
        } else {
            sum += number;
        }
    }
    return sum;
}
let flatMapArray = nestedArray.flatMap(element => sumElements(element));
console.log(flatMapArray);

let phrases = ["I love you", "I love me", "I love you too"];
let flatMapArray2 = phrases.flatMap(element => element.split(" "));
console.log(flatMapArray2);
// - ordering
// a) sort
let someLetters = ["z", "r", "e", "A", "a", "/"];
console.log(someLetters.sort()); // for default alphabetical order
console.log(someLetters.sort((a, b)=> a.localeCompare(b))); // for alphabetical order with locale

let myArray4 = [10, 5, 1, 20, 15, 12, 25, 18, 13, 22];
let sortedArray = myArray4.sort((a, b)=> a - b);
console.log(sortedArray);

// b) reverse
let myArray5 = [10, 5, 1, 20, 15, 12, 25, 18, 13, 22];
let reversedArray = myArray5.reverse();
console.log(reversedArray);

// - searching
// a) includes
let someLetters2 = ["z", "r", "e", "A", "a", "/"];
console.log(someLetters2.includes("e"));
console.log(someLetters2.includes(2));
// b) find
let myFind = myArray.find(element=> element[0] === "John");
console.log(myFind);
let myNumbers = [10, 5, 1, 20, 15, 12, 25, 18, 13, 22];
let myFind2 = myNumbers.find(element=> element > 10); // only the first element that matches the condition is returned
console.log(myFind2);
// c) findIndex
let myFindIndex = myArray.findIndex(element=> element[0] === "John");
console.log(myFindIndex);
let myFindIndex2 = myNumbers.findIndex(element=> element > 10); // only the first index that matches the condition is returned
console.log(myFindIndex2);
// d) some
let mySome = myArray.some(element=> element[0] === "John");
console.log(mySome);

// - advanced with sets
// a) union
let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 3, 2]);
let unionSet = new Set([...set1, ...set2]);
console.log(unionSet);
// b) intersection
let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
console.log(intersectionSet);
// c) difference
let differenceSet = new Set([...set1].filter(x => !set2.has(x)));
console.log(differenceSet);
// d) conversion (array -> set -> array)
let myArray6 = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 10, 10, 10, 10];
myArray6 = [... new Set(myArray6)];
console.log(myArray6);
// e) to array
let arrayFromSet = [...set1];
console.log(arrayFromSet);
// f) iteration for sets
let set3 = new Set([1, 2, 3, 4, 5]);
for (let number of set3) {
    console.log(number);
}
// - advanced with maps
let myMap = new Map([["name", "John"], ["age", 30], ["city", "New York"]]);
console.log(myMap);
// a) forEach
myMap.forEach((value, key) => console.log(`${key}: ${value}`));
// b) map to array
const arrayFromMap = Array.from(myMap);
console.log(arrayFromMap);
// c) map to dictionary or object
const dictionaryFromMap = Object.fromEntries(myMap);
console.log(dictionaryFromMap);
// d) object to map
const mapFromObject = new Map(Object.entries(dictionaryFromMap));
console.log(mapFromObject);
// e) iteration for maps
myMap.forEach((value, key) => console.log(`${key}: ${value}`));
// f) conversion (map -> object -> map)
const myMap2 = new Map([["name", "John"], ["age", 30], ["city", "New York"]]);
const myObject = Object.fromEntries(myMap2);
const myMap3 = new Map(Object.entries(myObject));
console.log(myMap3);