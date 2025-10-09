// loops

// for
console.log("for");
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element: ${myArray[i]}`);
}

// while
console.log("while");
const oddNumbers = [1, 3, 5, 7, 9];
let i = 0;
while (i < oddNumbers.length) {
    console.log(`Element: ${oddNumbers[i]}`);
    i++;
}

// do while
console.log("do while");
let j = 0;
do {
    console.log(`Element: ${oddNumbers[j]}`);
    j++;
} while (j < oddNumbers.length);

// for of
console.log("for of");
let aArray = [1, 2, 3, 4, 5];
let aSet = new Set(aArray);
let aMap = new Map(aSet.entries());

for (let number of aArray) {
    console.log(`Array element: ${number}`);
}

for (let number of aSet) {
    console.log(`Set element: ${number}`);
}

for (let [key, value] of aMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

let aString = "Hello world";
for (let char of aString) {
    console.log(`Character: ${char}`);
}

// break, continue
console.log("break, continue");
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Breaking the loop");
        break;
    }
    console.log(`Element: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Skipping the next iteration");
        continue;
    }
    console.log(`Element: ${i}`);
}