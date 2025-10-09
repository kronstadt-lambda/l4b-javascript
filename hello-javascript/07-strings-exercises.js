// Exercise 1:
console.log("Exercise 1:");
let firstMessage = "I am a string ..., ";
let secondMessage = 'I am also a string';
console.log(firstMessage + secondMessage);

// Exercise 2:
console.log("Exercise 2:");
console.log(firstMessage.length + secondMessage.length);

// Exercise 3:
console.log("Exercise 3:");
console.log(secondMessage[0]);
console.log(secondMessage[secondMessage.length - 1]);

// Exercise 4:
console.log("Exercise 4:");
console.log(firstMessage.toLowerCase());
console.log(firstMessage.toUpperCase());

// Exercise 5:
console.log("Exercise 5:");
let multilineMessage = `This is a multiline string. \n It can be used to create \n multi-line strings.`;
console.log(multilineMessage);

// Exercise 6:
console.log("Exercise 6:");
let name = "John";
console.log(`Hello ${name}!`);

// Exercise 7:
console.log("Exercise 7:");
let littleMessage = "My message is short";
let modifiedMessage = littleMessage.replace(/ /g, "-");
console.log(modifiedMessage);

// Exercise 8:
console.log("Exercise 8:");
let words = "This is a string with several words";
console.log(words.includes("string"));

// Exercise 9:
console.log("Exercise 9:");
let sentence1 = "This is a sentence";
let sentence2 = "This are sentences";
console.log(sentence1 === sentence2);

// Exercise 10:
console.log("Exercise 10:");
console.log(sentence1.length == sentence2.length);
