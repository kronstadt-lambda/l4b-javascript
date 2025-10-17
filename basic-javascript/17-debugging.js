// Debugging

function sum(a, b) {
    console.log("type of a: ", typeof a, " type of b: ", typeof b, "");
    console.log(a + b);
    return a + b;
}

console.log(sum(1, "2"));

// professional debugging
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
console.log(divide(10, 0));

