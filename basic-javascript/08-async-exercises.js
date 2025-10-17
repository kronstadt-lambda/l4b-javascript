// Exercise 1:
console.log("Exercise 1");
function greetings(callback, name) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 2000);
}
greetings(console.log, "JavaScript");

// Exercise 2:
console.log("Exercise 2");
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 1000)
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3");
        callback();
    }, 1000)
}
task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks done");
        })
    })
})
// Exercise 3:
console.log("Exercise 3");
function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 == 0) {
                resolve(`The number ${number} is even`);
            } else {
                reject(`The number ${number} is odd`);
            }
        }, 4000);
    })
}
checkEvenNumber(11)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("The promise is done"))

// Exercise 4:
console.log("Exercise 4");
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1");
            resolve();
        }, 5000);
        }
    )
}
function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2");
            resolve();
        }, 7000);
    })
}
function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 3");
            resolve();
        }, 8500);
    })
}
firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => console.log("All tasks done"))
    .catch(error => console.log(error))
    .finally(() => console.log("The promise is done, exercise 4"))

// Exercise 5:
console.log("Exercise 5");
async function executeTasks() {
    console.log("Start executing tasks, exercise 5");
    await firstTask();
    await secondTask();
    await thirdTask();
    console.log("All tasks done, exercise 5");
}
executeTasks();

// Exercise 6:
console.log("Exercise 6");
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({id: id, name: `User ${id}`});
            } else {
                reject("User not found");
            }
        }, 10000)
    })
}
async function fetchUsers(id) {
    try {
        const user = await getUser(id);
        console.log(`User '${user.name}' found`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
fetchUsers(1);
fetchUsers(10);

// Exercise 7:
console.log("Exercise 7");
console.log("Init")             // 1st: Synchronous operation, executes immediately
setTimeout(() => console.log("setTimeout executed"), 0)  // 4th: Callback goes to macrotask queue
Promise.resolve().then(() => console.log("Promise executed"))  // 3rd: Microtask queue has priority
console.log("End")             // 2nd: Synchronous operation, executes immediately

// Exercise 8:
console.log("Exercise 8");
function processTask1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("process task 1");
            resolve("Task 1 done");
        }, 1000);
    })
}
function processTask2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("process task 2");
            resolve("Task 2 done");
        }, 1500);
    })
}
function processTask3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("process task 3");
            resolve("Task 3 done");
        }, 2000);
    })
}
Promise.all([processTask1(), processTask2(), processTask3()])
    .then(results => {
        console.log("All tasks done, exercise 8");
        console.log("Results: ", results);
    })

// Exercise 9:
console.log("Exercise 9");
function waitSeconds(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Waited ${seconds} seconds`);
            resolve();
        }, seconds * 1000);
    })
}
async function countdown() {
    await waitSeconds(3);
    console.log("Time finished, exercise 9");
}
countdown();

// Exercise 10:
console.log("Exercise 10");
let accountBalance = 500

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(accountBalance)
        }, 1000)
    })
}
function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= accountBalance) {
                accountBalance -= amount
                resolve(accountBalance)
            } else {
                reject("Insufficient funds")
            }
        }, 2000)
    })
}
async function performTransaction() {
    try {
        const initialBalance = await checkBalance()
        console.log(`Available balance: ${initialBalance}$`)

        console.log("Withdraw 300$...")
        const balanceAfterFirst = await withdrawMoney(300)
        console.log(`Successful operation, available balance: ${balanceAfterFirst}$`)

        console.log("Withdraw 300$...")
        const balanceAfterSecond = await withdrawMoney(300)
        console.log(`Successful operation, available balance: ${balanceAfterSecond}$`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
performTransaction();