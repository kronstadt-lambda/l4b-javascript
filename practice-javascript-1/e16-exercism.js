// Exercise 16
console.log("Exercise 16: Pizza order");

`
What is Recursion?
Recursion occurs when a function calls itself, either directly or indirectly. It's similar to a loop, but it involves 
breaking a problem down into smaller, more manageable sub-problems.

* Example 1: CountDown
function countdown(num) {
  // Base case
  if (num <= 0) {
    console.log('Blastoff!');
    return;
  }

  // Recursive case
  console.log(num);
  countdown(num - 1);
}

// Call the function
countdown(5);
// Output:
5
4
3
2
1
Blastoff!

Base case: When 'num' becomes less than or equal to 0, the function prints "Blastoff!" and stops calling itself.
Recursive case: The function prints the current 'num' and calls itself with 'num - 1'.

* Example 2: Factorial
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120

Base case: When 'n' is 0 or 1, the function returns 1.
Recursive case: The function multiplies 'n' by the factorial of 'n - 1'. 

* Key concepts:
Base Case: Every recursive function must have at least one base case, a condition where the function stops calling itself.
Without a base case, the recursion would continue indefinitely, leading to a stack overflow.

Recursive Case: The recursive case defines how the function calls itself with a smaller or simpler version of the problem.

* Pros and Cons of Recursion:
Pros:
- Elegant solution for certain problems.
- Mimics the mathematical induction concept.

Cons:
- Can be less efficient than iterative solutions.
- May lead to stack overflow for deep recursion.
`

// Instructions:
// You run a pizza shop, and offer three types of pizzas:
// - Margherita: $7
// - Caprese: $9
// - Formaggio: $10
// If customers want, they can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.
// Your task is to write code that assists the customer in figuring out the cost to them.

// 1. Calculate the price of a pizza
// Provided the pizza's name as the first argument, and an unlimited number of added options, calculate the price of the pizza in dollars.
export function pizzaPrice(pizzaName, ...extras) {
    let basePrice = 0;
    switch (pizzaName) {
        case 'Margherita':
            basePrice = 7;
            break;
        case 'Caprese':
            basePrice = 9;
            break;
        case 'Formaggio':
            basePrice = 10;
            break;
        default:
            throw new Error('Unknown pizza type');
    }

    function sumExtras(list) {
        if (list.length === 0) return 0;
        const [head, ...tail] = list;
        if (head === 'ExtraSauce') return 1 + sumExtras(tail);
        if (head === 'ExtraToppings') return 2 + sumExtras(tail);
        throw new Error('Unknown extra option');
    }

    return basePrice + sumExtras(extras);
}

console.log(pizzaPrice('Margherita')); // 7
console.log(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')); // 12
console.log(pizzaPrice(
    'Caprese',
    'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',
)); // 17

// 2. Calculate the total price of an order
// Your function is called with a list of 'PizzaOrders' and should return the total price of the order in dollars.
// Each 'PizzaOrder' has a pizza property - the pizza's name, and an extras property - the list of extra options.

class PizzaOrder {
    constructor(pizza, ...extras) {
        this.pizza = pizza;
        this.extras = extras;
    }
}

function orderPrice(pizzaOrders) {
    let total = 0;
    for (let i = 0; i < pizzaOrders.length; i++) {
        const o = pizzaOrders[i];
        total += pizzaPrice(o.pizza, ...o.extras);
    }
    return total;
}

const margherita = new PizzaOrder('Margherita');
const caprese = new PizzaOrder('Caprese', 'ExtraToppings');
console.log(orderPrice([margherita, caprese])); // 18