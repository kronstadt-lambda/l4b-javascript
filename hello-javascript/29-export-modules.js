// Export modules
// functions
export function add(a, b) { return a + b; }

// constants
export const PI = 3.141592653589793;

// variables
export let name = "Bryan";

// classes
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * PI;
    }
}


// default export
// Note: You can only have one default export per module. Default export can be any value (function, object, primitive value, etc.)

export default function greet(name) { return `Hello, ${name}!`; }