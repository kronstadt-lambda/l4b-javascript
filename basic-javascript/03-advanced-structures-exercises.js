// Exercise 1
console.log("Exercise 1");
let agePerson = [["John", 25], ["Juan", 45], ["Marco", 39], ["Augusto", 47]];
let mapAgePerson = agePerson.map(pair => pair[1]*2);
console.log(mapAgePerson);
let filterAgePerson = mapAgePerson.filter(element => element > 65);
console.log(filterAgePerson);
let reduceAgePerson = filterAgePerson.reduce((sum, element) => sum + element, 0);
console.log(reduceAgePerson);

// Exercise 2
console.log("Exercise 2");
function powerNumber(number, exp) {
    if (exp <= 0) return 1;
    return number * powerNumber(number, exp - 1);
}
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNumbers = myNumbers.map(number => powerNumber(number, 3)).filter(number => number % 2 == 0);
console.log(filterNumbers);

// Exercise 3
console.log("Exercise 3");
let nestedArray = [["John", [100, 28]], ["Juan", [105, 200, 300]], ["Marco", 500], ["Augusto", [800, 1000]]];
const salaryArray = nestedArray.flatMap(([, salary]) => Array.isArray(salary) ? salary : [salary]);
console.log(salaryArray);

// Exercise 4
console.log("Exercise 4");
let randomIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNumbers = randomIntegers.map(number => Math.floor(Math.random() * 10) + 1);
console.log(randomNumbers);
let orderedVector = randomNumbers.sort((a, b) => a - b).reverse();
console.log(orderedVector);

// Exercise 5
console.log("Exercise 5");
let group1Set = new Set(["John", "Juan", "Marco", "Augusto"]);
let group2Set = new Set(["John", "Pedro", "Marco", "Jose"]);

let unionSet = new Set([...group1Set, ...group2Set]);
console.log(unionSet);

let intersectionSet = new Set([...group1Set].filter(element => group2Set.has(element)));
console.log(intersectionSet);

let differenceSet = new Set([...unionSet].filter(element => !intersectionSet.has(element)));
console.log(differenceSet);

// Exercise 6
console.log("Exercise 6");
console.log("union elements");
for (let element of unionSet) {
    console.log(element);
}
console.log("intersection elements");
for (let element of intersectionSet) {
    console.log(element);
}
console.log("difference elements");
for (let element of differenceSet) {
    console.log(element);
}

// Exercise 7
console.log("Exercise 7");
const users = new Map([
    [1, { name: "Brais", age: 25, email: "brais@ejemplo.com" }],
    [2, { name: "Moure", age: 17, email: "moure@ejemplo.com" }],
    [3, { name: "MoureDev", age: 38, email: "mouredev@ejemplo.com" }],
    [4, { name: "Brais Jr.", age: 16, email: "braisjr@ejemplo.com" }]
]);
for (let [key, value] of users) {
    console.log(`User ${key}: ${value.name} (${value.age} years old), email: ${value.email}`);
}

// Exercise 8
console.log("Exercise 8");
let arrayNames = [...users.values()].map(user => user.name);
console.log(arrayNames);

// Exercise 9
console.log("Exercise 9");
let arrayEmails = [...users.values()].filter(user => user.age >= 18).map(user => user.email);
let setEmails = new Set(arrayEmails);
console.log(setEmails);

// Exercise 10
console.log("Exercise 10");
const objectUsers = Object.fromEntries(users);
const usersByName = new Map(Object.entries(objectUsers).map(([id, user]) => [
    user.email,
    {name: user.name, age: user.age}
]));
console.log(usersByName);








