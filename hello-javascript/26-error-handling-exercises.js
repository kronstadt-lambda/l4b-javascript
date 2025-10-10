import { redErr } from './errorStyle.js';
// Exercise 1:
console.log("Exercise 1");
const x = null;
try {
    console.log(x.name);
} catch (error) {
    console.log(redErr("Error message! : "));
}

// Exercise 2:
console.log("Exercise 2");
try {
    console.log(x.name);
} catch (error) {
    console.log(redErr("Error message! : "));
} finally {
    console.log("This code will always be executed");
}

// Exercise 3:
console.log("Exercise 3");
try {
    console.log(x.name);
} catch (error) {
    console.log(redErr("Error message! : "), error.message);
}

// Exercise 4:
console.log("Exercise 4");
class ValidTemperatureError extends Error {
    constructor(message, value) {
        super(message);
        this.value = value;
    }
    printTemperature() {
        console.log(this.value);
    }
}
function checkTemperature(temperature) {
    if (typeof temperature != "number") {
        throw new TypeError("Temperature must be a number");
    }
    if (temperature < -273.15 || temperature > 100) {
        throw new ValidTemperatureError("Temperature out of range", temperature);
    }
    return temperature;
}
try {
    console.log(checkTemperature(100));
    console.log(checkTemperature(-273.15));
    console.log(checkTemperature(1000));
} catch (error) {
    if (error instanceof ValidTemperatureError) {
        console.log(redErr("Error message! : "), error.message);
        error.printTemperature();
    } else {
        console.log(redErr("Error message! : "), error.message);
    }
}

// Exercise 5:
console.log("Exercise 5");
try {
    console.log(checkTemperature("100"));
} catch (error) {
    if (error instanceof ValidTemperatureError) {
        console.log(redErr("Error message! : "), error.message);
        error.printTemperature();
    } else if (error instanceof TypeError) {
        console.log(redErr("Error message! : "), error.message);
    } else {
        console.log(redErr("Error message! : "), error.message);
    }
}

// Exercise 6:
console.log("Exercise 6");
console.log("completed");

// Exercise 7:
console.log("Exercise 7");
console.log("completed");

// Exercise 8:
console.log("Exercise 8");
function isFloat(n) {
    if (typeof n !== "number") {
        throw new TypeError("n must be a number");
    }
    return n % 1 !== 0;
}

let myArray = [1., "2.5", null, 4.4, 5];
for (let element of myArray) {
    try {
        console.log(isFloat(element));
    } catch (error) {
        if (error instanceof TypeError) {
            console.log(redErr("Error message! : "), error.message);
            console.log(`The element is ${element} and it is a ${typeof element}`);
        } else {
            console.log(redErr("Error message! : "), error.message);
        }
    }

}

// Exercise 9:
console.log("Exercise 9");
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
    printCode() {
        console.log("Error code: 999");
    }
}

function chekProperty(object, property) {
    if (!object.hasOwnProperty(property)) {
        throw new CustomError(`The object does not have the property ${property}`);
    }
    return object[property];
}
let myObject = {
    name: "John",
    age: 30
}
try {
    console.log(chekProperty(myObject, "name"));
    console.log(chekProperty(myObject, "address"));
} catch (error) {
    if (error instanceof CustomError) {
        console.log(redErr("Error message! : "), error.message);
        error.printCode();
    }
}

// Exercise 10:
console.log("Exercise 10");
function unstableOperation() {
    if (Math.random() > 0.9) {
        console.log("Correct operation");
    } else {
        throw new Error("Unstable operation");
    }
}
function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Attempt ${attempts} fails: ${error.message}`)
        }
    }

    if (!success) {
        console.log("Max retries reached. Operation failed.")
    }
}
