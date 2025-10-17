// Async programming

// sync code:

console.log('one');
// for (let i = 0; i < 1000000000; i++) {}
console.log('two');

// Event loop is a queue of tasks, that manage the execution of the code.
// Event loop has three components:
// 1. call stack (pila de ejecucion de codigo en js)
// This means that the code is executed line by line
// 2. Web APIs (ejecucion en explorador) o Node.js
// Async code is executed in the background
// 3. task queue (cola de tareas) and microtask queue (cola de microtareas)
//
// Event loop Flow:
// 1. Execute synchronous code in the call stack
// 2. Ubica operaciones asincronicas en la cola de tareas y las delega a la web APIs o Node.js
// 3. Una vez termina, se coloca en la task queue o las microtask queue (cola de tareas)
// 4. Level loop revisa si el call stack esta vacio y si hay tareas pendientes, entonces mueve ...
// las tareas del Microtask queue o task queue al call stack para su ejecucion.
// 5. Repetir el proceso desde el paso 1

// Mechanism for async code:
// 1. Callbacks: function that is passed as an argument to another function
console.log('callback');
setTimeout(() => {
    console.log(`this is executed after 2 seconds`);
}, 2000) // 2000 milliseconds
console.log('after callback');
/*
 * WARNING: Nested callbacks (Callback Hell) should be avoided because:
 * 1. Code becomes difficult to read and maintain due to excessive nesting
 * 2. Error handling becomes complex and hard to manage
 * 3. Code flow is harder to follow and understand
 * 4. Debugging becomes challenging
 * 5. Makes code more prone to bugs and harder to test
 * 6. Reduces code reusability
 * 7. Makes asynchronous flow control more complicated
 * Better alternatives: Promises, async/await, or other modern async patterns
 */
console.log('callback hell!!');
function step1(callback) {
    setTimeout(() => {
        console.log('step 1');
        callback();
    }, 1000);
}
function step2(callback) {
    setTimeout(() => {
        console.log('step 2');
        callback();
    }, 1000);
}
function step3(callback) {
    setTimeout(() => {
        console.log('step 3');
        callback();
    }, 1000);
}
step1(() => {
    step2(() => {
        step3(() => {
            console.log('all steps done');
        })
    })
})
// 2. Promises: value that will be resolved in the future
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false;
        if (ok) {
            resolve("Everything is OK");
        } else {
            reject(new Error("Something went wrong"));
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result);
        console.log("Promise is resolved");
    })
    .catch(error => {
        console.log("There is a error: ", error.message);
    })
    .finally(() => {
        console.log("Promise is done");
    })
// chained promises
function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('step 1 with promise done!');
            resolve();
        }, 1000);
    })
}
function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('step 2 with promise done!');
            resolve();
        }, 2000);
    })
}
function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('step 3 with promise done!');
            resolve();
        }, 3000);
    })
}
step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log('all steps with promise done!');
    })

// 3. Async/Await: syntax sugar for promises
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('start process');
    await wait(10000);
    console.log('after 10 seconds');
    await wait(1000);
    console.log('after 1 seconds');
    await wait(2000);
    console.log('after 2 seconds');
    console.log('end process');
}
process();

// 4. Generators
// 5. Async iterators
// 6. Streams
// 7. Web APIs
// 8. Node.js
// 9. Event loop
// 10. Event loop Flow


