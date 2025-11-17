// Exercise 15
console.log("Exercise 15: Amusement Park");

`
In contrast to many other languages, there are two different entities in JavaScript that represent the absence of a 
(meaningful) value. There is 'null' and 'undefined'.

* Null
The primitive value 'null' is used as an intentional "empty value" for variables of any type.

let name = null;
console.log(name); // null
console.log("is name null? ", name === null); // true

* Undefined
A variable that has not been assigned a value is of type 'undefined'.
That means while 'null' represents an empty value (but still a value), 'undefined' represents the total absence of a value.
'undefined' appears in different contexts.
- If a variable is declared without a value (initialization), it is 'undefined'.
- If you try to access a value for a non-existing key in an object, you get 'undefined'.
- If a function does not return a value, the result is 'undefined'.
- If an argument is not passed to a function, it is 'undefined', unless that argument has a default value.

let name;
console.log(name); // undefined
console.log("is name undefined? ", name === undefined); // true

let person = { age: 30 };
console.log(person.name); // undefined

function greet() {
  console.log("Hello!");
}
let result = greet(); // Hello!
console.log(result); // undefined

* Optional Chaining
If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error. 
To easily avoid this, optional chaining was added to the language specification in 2020. With the optional chaining 
operator '?'. you can ensure that JavaScript only tries to access the nested key if the parent was not 'null' or 'undefined'.
Otherwise, 'undefined' is returned.

const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.address.zipCode;
// => undefined

obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street;
// => undefined

* Nullish Coalescing
There are situations where you want to apply a default value in case a variable is null or undefined (but only then). 
To address this, the nullish coalescing operator ?? was introduced in 2020. It returns the right-hand side operand only 
when the left-hand side operand is 'null' or 'undefined'. Otherwise, the left-hand side operand is returned.

let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
`

// 1. Create a new visitor
const nameVisitor = 'Verena Nardi';
const ageVisitor = 45;
const ticketIdentifier = 'H32AZ123';
export function createVisitor(name, age, ticketId) {
    return {
        name: name,
        age: age,
        ticketId: ticketId,
    };
}
const visitor = createVisitor(nameVisitor, ageVisitor, ticketIdentifier);
console.log("New visitor: ", visitor);

// 2. Revoke the ticket
export function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor
}
revokeTicket(visitor);
console.log("Visitor after revoking ticket: ", visitor);

// 3. Determine the ticket status
const tickets = {
    "0H2AZ123": null,
    "23LA9T41": 'Verena Nardi',
};
export function ticketStatus(tickets, ticketId) {
    if (!(ticketId in tickets)) {
        return "unknown ticket id";
    } else if (tickets[ticketId] === null) {
        return "not sold";
    } else {
        return `sold to ${tickets[ticketId]}`;
    }
}
console.log("Ticket status for 'RE90VAW7': ", ticketStatus(tickets, "RE90VAW7"));
console.log("Ticket status for '0H2AZ123': ", ticketStatus(tickets, "0H2AZ123"));
console.log("Ticket status for '23LA9T41': ", ticketStatus(tickets, "23LA9T41"));

// 4. Improve the ticket status response
export function simpleTicketStatus(tickets, ticketId) {
    const status = tickets[ticketId] ?? 'invalid ticket !!!';
    return status;
}
console.log("Simple ticket status for '23LA9T41': ", simpleTicketStatus(tickets, "23LA9T41"));
console.log("Simple ticket status for '0H2AZ123': ", simpleTicketStatus(tickets, "0H2AZ123"));
console.log("Simple ticket status for 'RE90VAW7': ", simpleTicketStatus(tickets, "RE90VAW7"));

// 5.  Determine the version of terms and conditions
const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

export function gtcVersion(visitor) {
    return visitor.gtc?.version ?? undefined;
}
console.log("GTC version for visitorNew: ", gtcVersion(visitorNew));
console.log("GTC version for visitorOld: ", gtcVersion(visitorOld));