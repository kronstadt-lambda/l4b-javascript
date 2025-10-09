// Structures

// Arrays
// Characteristics:
// - Ordered collection of elements
// - Can store any type of data
// - Can have duplicate elements
// - Access elements by index
// - Mutable (can be modified)
// Use cases:
// - List of items (shopping cart)
// - Queue of tasks
// - Stack of operations
const arrayExample = ['apple', 'banana', 'apple'];
console.log('Array example:', arrayExample);
console.log('Access by index:', arrayExample[0]);

// Sets
// Characteristics:
// - Unordered collection of unique elements
// - Cannot have duplicates
// - No index access
// - Fast lookup for values
// Use cases:
// - Remove duplicates from array
// - Store unique identifiers
// - Track unique visitors
const setExample = new Set(['apple', 'banana', 'apple']);
console.log('Set example:', setExample);
console.log('Has apple?:', setExample.has('apple'));

// Maps
// Characteristics:
// - Key-value pairs
// - Any type as key (not just strings)
// - Maintains insertion order
// - Better performance for frequent additions/removals
// Use cases:
// - Cache storage
// - User sessions
// - Configuration settings
const mapExample = new Map([
    ['name', 'John'],
    ['age', 30],
    [{id: 1}, 'object as key']
]);
console.log('Map example:', mapExample);
console.log('Get value:', mapExample.get('name'));
