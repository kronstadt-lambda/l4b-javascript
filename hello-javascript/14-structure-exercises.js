// Exercise 1
console.log("Exercise 1");
let myArray = ["chicken", "dog", "caiman", "cat", "lion"];
console.log(myArray);

// Exercise 2
console.log("Exercise 2");
myArray.push("elephant");
myArray.unshift("bird");
console.log(myArray);

// Exercise 3
console.log("Exercise 3");
myArray.splice(2, 1);
console.log(myArray);

// Exercise 4
console.log("Exercise 4");
let mySet = new Set();
mySet.add("science's book");
mySet.add("math's book");
mySet.add("english's book");
mySet.add("math's book");
mySet.add("religion's book");
console.log(mySet);

// Exercise 5
console.log("Exercise 5");
mySet.add("geography's book");
mySet.add("math's book");
console.log(mySet);

// Exercise 6
console.log("Exercise 6");
mySet.delete("science's book");
console.log(mySet);

// Exercise 7
console.log("Exercise 7");
let myMap = new Map();
myMap.set(1, "January");
myMap.set(2, "February");
myMap.set(3, "March");
myMap.set(4, "April");
myMap.set(5, "May");
myMap.set(6, "June");
myMap.set(7, "July");
myMap.set(8, "August");
myMap.set(9, "September");
myMap.set(10, "October");
myMap.set(11, "November");
myMap.set(12, "December");
console.log(myMap);

// Exercise 8
console.log("Exercise 8");
if (myMap.has(5)) {
    console.log( "The month is : " + myMap.get(5));
}

// Exercise 9
console.log("Exercise 9");
myMap.set("all", myMap.values().toArray());
console.log(myMap);

// Exercise 10
console.log("Exercise 10");
let aArray = ["a", "b", "c", "d", "e"];
let aSet = new Set(aArray);
let aMap = new Map(aSet.entries());
console.log(aMap);