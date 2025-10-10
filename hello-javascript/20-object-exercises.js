// Exercise 1
console.log("Exercise 1");
let myObject = {
    name: "Johnny",
    age: 30,
    city: "New York"
}
console.log(myObject);

// Exercise 2
console.log("Exercise 2");
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.city);

// Exercise 3
console.log("Exercise 3");
myObject.alias = "Johnny Bravo";
console.log(myObject.alias);

// Exercise 4
console.log("Exercise 4");
delete myObject.city;
console.log(myObject);

// Exercise 5
console.log("Exercise 5");
myObject.greetings = function() {
    console.log(`Hello ${this.name}. I am ${this.age} years old.`);
}
myObject.greetings();

// Exercise 6
console.log("Exercise 6");
for (let key in myObject) {
    console.log(`.${key}: ${myObject[key]}`);
}

// Exercise 7
console.log("Exercise 7");
let highObject = {
    name: "Johnny",
    age: 30,
    city: "New York",
    greetings: function() {
        console.log(`I'm ${this.name}. I am ${this.age} years old.`);
    },
    son: {
        name: "Johnnicito",
        age: 12,
        city: "Springfield",
        greetings: function() {
            console.log(`This is my son ${this.name}. He is ${this.age} years old.`);
        }
    }
}

// Exercise 8
console.log("Exercise 8");
highObject.greetings()
highObject.son.greetings();

// Exercise 9
console.log("Exercise 9");
console.log(highObject == highObject.son);
console.log(highObject === highObject.son);

// Exercise 10
console.log("Exercise 10");
console.log(highObject.greetings == highObject.son.greetings);
console.log(highObject.greetings === highObject.son.greetings);
console.log(highObject.name == highObject.son.name);
console.log(highObject.name === highObject.son.name);
console.log(typeof highObject);