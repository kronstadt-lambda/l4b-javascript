// Note: Both files (the one that exports and the one that imports) must have .mjs extension
// Another note: create package.json file and add type: "module" to it

// Import modules
import {add, PI, name, Circle} from './29-export-modules.js';
import defaultImport from './29-export-modules.js';

// Use the imported function

console.log(add(1, 2));
console.log(PI);
console.log(name);

// default import
console.log(defaultImport("Marco"));

// import class
let circle = new Circle(10);
console.log(circle.getArea().toFixed(2))

// Modular projects
// import { myImport } from './directory/file.js';
