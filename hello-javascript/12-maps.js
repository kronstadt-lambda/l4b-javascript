// Maps
// It is like an object but with keys and values

let myMap = new Map(); // declaration

console.log(myMap);

// Initialize with an array
myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);

console.log(myMap);

// Methods and properties

// set
myMap.set("alias", "bramau"); // it adds a new key and value
console.log(myMap);
myMap.set("name", "Mauro"); // it updates the value
console.log(myMap);

// get
console.log(myMap.get("name"));
console.log(myMap.get("lastname")); // it returns undefined if the key doesn't exist

// has
console.log(myMap.has("name"));
console.log(myMap.has("lastname"));

// delete
myMap.delete("alias");
console.log(myMap);

// clear
myMap.clear();
console.log(myMap);

myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);

// size
console.log(myMap.size);

// keys, values and entries
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

