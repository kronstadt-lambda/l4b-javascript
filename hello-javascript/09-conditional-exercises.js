// Exercise 1
console.log("Exercise 1");
let myName = "Brayan";
if (myName === "Brayan") {
    console.log("Hello Brayan");
}

// Exercise 2
console.log("Exercise 2");
let user = "bramau";
let password = "123456";
if ((user === "bramau") && (password === "123456")) {
    console.log("Login successful");
}

// Exercise 3
console.log("Exercise 3");
let number = -5;
if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Exercise 4
console.log("Exercise 4");
let age = 12;
if (age >= 18) {
    console.log("You are old enough to vote");
} else {
    console.log("You are not old enough to vote");
    missingYears = 18 - age;
    console.log(`You are missing ${missingYears} years to vote`);
}

// Exercise 5
console.log("Exercise 5");
let agePerson = 5;
let person = agePerson >= 18 ? "Adult" : "Minor";
console.log(person);


// Exercise 6
console.log("Exercise 6");
const summer = ["June", "July", "August"];
const autumn = ["September", "October", "November"];
const winter = ["December", "January", "February"];
const spring = ["March", "April", "May"];
let month = "January";
if (summer.includes(month)) {
    console.log("It is summer");
} else if (autumn.includes(month)) {
    console.log("It is autumn");
} else if (winter.includes(month)) {
    console.log("It is winter");
} else if (spring.includes(month)) {
    console.log("It is spring");
} else {
    console.log("It is not a month");
}

// Exercise 7
console.log("Exercise 7");
switch (month) {
    case "January":
        console.log(`${month} has 31 days`);
        break;
    case "February":
        console.log(`${month} has 28 or 29 days`);
        break;
    case "March":
        console.log(`${month} has 31 days`);
        break;
    case "April":
        console.log(`${month} has 30 days`);
        break;
    case "May":
        console.log(`${month} has 31 days`);
        break;
    case "June":
        console.log(`${month} has 30 days`);
        break;
    case "July":
        console.log(`${month} has 31 days`);
        break;
    case "August":
        console.log(`${month} has 31 days`);
        break;
    case "September":
        console.log(`${month} has 30 days`);
        break;
    case "October":
        console.log(`${month} has 31 days`);
        break;
    case "November":
        console.log(`${month} has 30 days`);
        break;
    case "December":
        console.log(`${month} has 31 days`);
        break;
    default:
        console.log("It is not a month");
}

// Exercise 8
console.log("Exercise 8");
let language = "spanish";
switch (language) {
    case "english":
        console.log("Hello world");
        break;
    case "spanish":
        console.log("Hola mundo");
        break;
    case "french":
        console.log("Bonjour le monde");
        break;
    case "german":
        console.log("Hallo Welt");
}

// Exercise 9
console.log("Exercise 9");
console.log("echo")

// Exercise 10
console.log("Exercise 10");
console.log("echo")