// Exercise 1
console.log("Exercise 1");
for (let i = 1; i <= 20; i++) {
    console.log(`Number: ${i}`);
}

// Exercise 2
console.log("Exercise 2");
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`Suma: ${suma}`);

// Exercise 3
console.log("Exercise 3");
let i = 1;
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(`Even number: ${i}`);
    }
    i++;
}

// Exercise 4
console.log("Exercise 4");
let names = ["Brayan", "Maurer", "Juan", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Jose", "Marcos"];
for (let name of names) {
    console.log(`Name: ${name}`);
}

// Exercise 5
console.log("Exercise 5");
let vowels = "aeiouAEIOU";
let sentence = "The quick brown fox jumps over the lazy dog. It is a beautiful day.";
let j = 0;
for (let letter of sentence) {
    if (vowels.includes(letter)) {
        console.log(`Vowel: ${letter}`);
        j++;
    }
}
console.log(`Number of vowels: ${j}`);

// Exercise 6
console.log("Exercise 6");
let myArray = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10];
let product = 1;
for (let number of myArray) {
    product *= number;
}
console.log(`Product: ${product}`);

// Exercise 7
console.log("Exercise 7")
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let number of arrayNumber) {
    console.log(`5 x ${number} = ${number * 5}`);
}

// Exercise 8
console.log("Exercise 8");
let chainText = "Hello world";
let chainTextReverse = "";
let k = chainText.length;
do {
    chainTextReverse += chainText[k-1];
    k--
} while (k > 0);
console.log(`Chain text reverse: ${chainTextReverse}`);

// Exercise 9
console.log("Exercise 9")
let fibonacci = [0, 1];
let n = 10;
while (fibonacci.length < n) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}
console.log(`Fibonacci sequence: ${fibonacci}`);

// Exercise 10
console.log("Exercise 10");
let listRandomNumbers = [2, 15, 38, 5, -1, 0, 25, 120, 4, 68, 9, 10, 12, -10]
let newArray = [];
for (let number of listRandomNumbers) {
    if (number > 10) {
        newArray.push(number);
    }
}
console.log(`New array: ${newArray}`);


