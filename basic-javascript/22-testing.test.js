const multiply = require('./21-testing');

test(
    "multiply 2 numbers",
    () => {
        expect(multiply(2, 3)).toBe(6);
    }
)

test(
    "multiply 2 numbers",
    () => {
        expect(multiply(4, 3)).toBe(6);
    }
)