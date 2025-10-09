// set

let newSet = new Set(); // declaration
otherThing = {} // It isn't a set xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
newSet = new Set("Mauro", "Brayan", 2); // bad constructor

console.log(newSet, otherThing);

// correct form
mySet = new Set(["Mauro", "Brayan", 2, "Mauro"]);
console.log(mySet);

// Methods
// add and delete
mySet.add("Juan");
mySet.add("Pedro");
mySet.add("Juan"); // duplicate, it won't be added
console.log(mySet);

mySet.delete("Juan");
console.log(mySet);
console.log(mySet.delete("NonName")); // it won't be deleted but get false as return
// a set can't have duplicate values'
// a set don't have an index for values

// has
// it returns true or false if the value is in the set
console.log(mySet);
console.log(mySet.has("Juan"));
console.log(mySet.has("Pedro"));

// size
console.log(mySet.size);

// Convert to array
let myArray = Array.from(mySet)
console.log(myArray);