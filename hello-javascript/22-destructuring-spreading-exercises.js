// Exercise 1:
console.log("Exercise 1");
let myArray = [1, 2, 3, 4, 5];
const [first, second] = myArray;
console.log(first, second);

// Exercise 2:
console.log("Exercise 2");
const [first2, second2, third, fourth, fifth, six = -999] = myArray;
console.log(first2, second2, third, fourth, fifth, six);

// Exercise 3:
console.log("Exercise 3");
let myObject = {name: "Brayan", age: 30, city: "New York"};
const {name: name1, age: age1} = myObject;
console.log(name1, age1);

// Exercise 4:
console.log("Exercise 4");
let myObject2 = {name: "Brayan", age: 30, city: "New York", country: "USA"};
const {name: name2, age: age2, city: city2, country: country2, ...other} = myObject2;
console.log(name2, age2, city2, country2, other);

// Exercise 5:
console.log("Exercise 5");
let fatherPerson = {
    name: "Brayan",
    age: 30,
    city: "New York",
    country: "USA",
    greetings: function() {
        console.log(`Hello ${this.name}. I am ${this.age} years old.`)
    },
    sonPerson: {
        name: "Johnny",
        age: 12,
        city: "Springfield",
        country: "USA",
        greetings: function() {
            console.log(`Hello ${this.name}. I am ${this.age} years old.`)
        }
    }
};
console.log(fatherPerson.sonPerson.name);
console.log(fatherPerson.sonPerson.age);
fatherPerson.sonPerson.greetings()

// Exercise 6:
console.log("Exercise 6");
let evenArray = [2, 4, 6, 8, 10];
let oddArray = [1, 3, 5, 7, 9];
let allArray = [...evenArray, ...oddArray];
console.log(allArray);

// Exercise 7:
console.log("Exercise 7");
let copyArray = [...evenArray];
console.log(copyArray);

// Exercise 8:
console.log("Exercise 8");
let manObject = {
    name: "Brayan",
    age: 30,
    city: "New York",
}
let womanObject = {
    name: "Marla",
    age: 18,
    city: "Springfield",
}
let peopleObject = {...manObject, ...womanObject};
console.log(peopleObject);

// Exercise 9:
console.log("Exercise 9");
let copyObject = {...manObject};
console.log(copyObject);

// Exercise 10:
console.log("Exercise 10");
const numbers = [10, 20, 30, 40, 50];
const [a, b, ...restoNumbers] = numbers;
console.log(a, b);           // 10 20
console.log(restoNumbers);   // [30, 40, 50]
const others = [...restoNumbers, 60, 70];
const [first3, ...additional] = others;
console.log(first3);
console.log(additional);