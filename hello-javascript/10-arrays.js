// array

let simpleArray = []; // declaration
let simpleArray2 = new Array(); // declaration

console.log(simpleArray, simpleArray2);

simpleArray = [2];
simpleArray2 = new Array(2);
console.log(simpleArray, simpleArray2);

simpleArray = [2, 3, 4]; // prefer use this notation
simpleArray2 = new Array(2, 3, 4);
console.log(simpleArray, simpleArray2);

simpleArray = [2, "Brayan", null, undefined, 24, BigInt(456769645)];
simpleArray2 = new Array(2, "Brayan", null, undefined, 24, BigInt(456769645))
console.log(simpleArray, simpleArray2);

// Index assignation
simpleArray[0] = 1.4564;
simpleArray2[2] = 7;
console.log(simpleArray, simpleArray2);

let myArray = [];
myArray[4] = 1;
myArray[10] = "mauro";
console.log(myArray);

// Methods
// push and pop
myArray = [];
myArray.push(1);
myArray.push("mauro");
myArray.push(true);
myArray.push(null);
myArray.push(undefined);
myArray.push(1.4564);
myArray.push(BigInt(456769645));
myArray.push(Symbol("mauro"));
myArray.push({name: "mauro"});
myArray.push([1, 2, 3]);
myArray.push(new Date());
myArray.push(new RegExp("mauro"));
console.log(myArray);

myArray.pop();
myArray.pop();
console.log(myArray);

console.log(myArray.pop()); // print last element that was popped
console.log(myArray);
myArray.push(1, 2, 3); // push multiple elements
console.log(myArray);

// shift and unshift
myArray = ["Brayan", "Mauro", "Juan"];
myArray.shift();
myArray.shift();
console.log(myArray);

myArray.unshift("Brayan", "Mauro", "Rouss");
console.log(myArray);

// length
console.log(myArray.length);

// clear
myArray = [];

// slice
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
piece = myArray.slice(0, 5);
console.log(piece);

// splice
myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
myArray.splice(3, 5);
console.log(myArray);

myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
myArray.splice(3, 2, 100, 200, 300);
console.log(myArray);








