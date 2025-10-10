import { redErr } from './errorStyle.js';
// Exception

let myObject
// console.log(myObject.name) // type error: cannot read property 'name' of undefined

// catching exceptions
// try catch
try {
    console.log(myObject.name)
} catch (error) {
    console.log(redErr("There is a error!!!, ") , error.message );
}

// try catch finally
try {
    console.log(myObject.name)
} catch (error) {
    console.log(redErr("There is a error!!!, ") , error.message );
} finally {
    console.log("This code will always be executed");
}

// Launch exception
// throw
function sumIntegers(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new TypeError("a and b must be numbers");
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("a and b must be integers");
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("a and b must be different from 0",a,b);
    }
    return a + b;
}

// now catch the exception
try {
    console.log(sumIntegers(1, 2));
    console.log(sumIntegers(3.9, 2.2));
    console.log(sumIntegers("1", 2));
    console.log(sumIntegers(3, "2"));
    console.log(sumIntegers("1", "2"));
} catch (error) {
    console.log(redErr("There is a error!!!, ") , error.message );
}
// Catch many exceptions

try {
    console.log(sumIntegers(1.5, 2));
    console.log(sumIntegers("1", 2));
} catch (error) {
    if (error instanceof TypeError) {
        console.log(redErr("There is a error of type!!!, ") , error.message );
    } else {
        console.log(redErr("There is a error!!!, ") , error.message );
    }
}

// Customize exceptions
class SumZeroIntegerError extends Error {
    constructor(message,a,b) {
        super(message);
        this.a = a;
        this.b = b;
    }

    printNumbers() {
        console.log(`${this.a} + ${this.b}`);
    }
}

console.log("------------------------------------");
try {
    console.log(sumIntegers(0, 2));
} catch (error) {
    if (error instanceof TypeError) {
        console.log(redErr("There is a error of type!!!, ") , error.message );
    // } else if (error instanceof Error) {
    //     console.log(redErr("There is a error!!!, ") , error.message ); // This error is too generic and catch all errors
    } else if (error instanceof SumZeroIntegerError) {
        console.log(redErr("There is a error of type SumZeroIntegerError!!!, ") , error.message );
        error.printNumbers();
    }
}

