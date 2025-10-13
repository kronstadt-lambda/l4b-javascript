// console

// log: Shows a message in the console
console.log('Hello World');

// error: Shows an error message in the console
console.error("Error!");
console.error("Error to connect to the database", new Error("Database connection failed"));

// warn: Shows a warning message in the console
console.warn("Warning!");

// info: Shows an information message in the console
console.info("Information!");

// table: Shows a table in the console
let data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
console.table(data);

// group: Groups console messages together
console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

// time: Starts a timer
console.time("Timer"); // same text label
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Timer"); // same text label

// assert: Checks if a condition is true, and shows an error message if it's not
console.assert(1 === 2, "1 is not equal to 2");

// count: Counts the number of times a message is logged
console.count("Count");
console.count("Count");
console.count("Count");
console.countReset("Count");
console.count("Count");

// trace: Shows a stack trace
function func1() {
    function func2() {
        console.trace();
    }
    func2();
}
func1();

// clear: Clears the console
console.clear();