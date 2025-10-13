// Exercise 1
console.log("Exercise 1");
export function summation(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// Exercise 2
console.log("Exercise 2");
export const EPSILON = 2.712464456456;

// Exercise 3
console.log("Exercise 3");
export class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says: "I'm a animal"`);
    }
}

// Exercise 4
console.log("Exercise 4");
console.log("echo");

// Exercise 5
console.log("Exercise 5");
console.log("echo");

// Exercise 6
console.log("Exercise 6");
console.log("echo");

// Exercise 7
console.log("Exercise 7");
export default class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        super.speak();
        console.log(`${this.name} says: "Woof!"`);
    }
}

// Exercise 8
console.log("Exercise 8");
console.log("echo");

// Exercise 9
console.log("Exercise 9");
console.log("echo");

// Exercise 10
console.log("Exercise 10");
console.log("echo");