/**
 * The DOM (Document Object Model) is a programming interface for HTML and XML documents.
 * It represents the page as a tree-like structure where each node is an object representing
 * a part of the document (elements, attributes, text, etc.).
 *
 * In JavaScript and Frontend Development:
 * - Allows dynamic access and manipulation of webpage content, structure, and style
 * - Enables interactive web applications by providing methods to:
 *   * Select and modify HTML elements
 *   * Handle events (clicks, input, etc.)
 *   * Create/remove/modify elements and their content
 *   * Change element styles and attributes
 *   * Navigate through the document structure
 *
 * Common DOM Operations in JavaScript:
 * - document.getElementById()     - Select element by ID
 * - document.querySelector()      - Select first matching element
 * - element.addEventListener()    - Handle events
 * - element.innerHTML            - Modify element content
 * - element.style                - Change CSS styles
 * - element.classList            - Manage CSS classes
 *
 * The DOM bridges HTML/CSS with JavaScript, making web pages interactive and dynamic.
 *
 * The 'document' Object:
 * - Is the root entry point to the DOM
 * - Represents the entire HTML document as a JavaScript object
 * - Provides methods and properties to access and modify webpage elements
 * - Acts as a bridge between JavaScript and HTML/CSS by:
 *   * Allowing JavaScript to read HTML structure
 *   * Enabling dynamic modification of HTML content
 *   * Providing access to modify CSS styles
 *   * Managing element creation and deletion
 *   * Handling document-wide events
 */



// Handling DOM (Document Object Model) Events
// - Selecting elements
// a) Basics methods (HTML selector)
    // Get an element by id, and get elements by class name (in this case button element and all button collections)
    // Tag too is a good option

const buttonById = document.getElementById('button');
const buttonsByClass = document.getElementsByClassName('button');

const buttonsByTag = document.getElementsByTagName('tagButton');

// b) Modern Methods (CSS selector)
    // querySelector(): select first matching element
    document.querySelector('#button');

    // querySelectorAll(): select all matching elements
    document.querySelectorAll('.button');

// - Handling elements
const title = document.querySelector('h1');
title.textContent = 'Hello JavaScript!';

const container = document.querySelector('.container');
container.innerHTML = '<p>This is a paragraph.</p>';

// - Handling attributes
const link = document.querySelector('a');
const hasTarget =  link.hasAttribute('href'); // Check if the element has the href attribute
const url = link.getAttribute("href"); // Get the href attribute value
link.setAttribute("href", "https://www.google.com"); // Set the href attribute value
link.removeAttribute("href"); // Remove the href attribute

// - Interacting with CSS classes
const box = document.querySelector('.box');
box.classList.add("selected"); // Add a class to the element
box.classList.remove("selected"); // Remove a class from the element
box.classList.toggle("selected"); // Toggle a class on/off

const otherButton = document.querySelector('.otherButton');
otherButton.style.backgroundColor = 'red';
otherButton.style.color = 'white';
otherButton.style.padding = '10px 20px';
otherButton.style.fontSize = '24px';

// - Creating and removing elements
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
newElement.classList.add('newElement');
container.appendChild(newElement);

const itemsList = document.querySelector('.itemsList');
const item = document.createElement('li');
item.textContent = 'Item 1';

const secondItem = itemsList.children[1];
itemsList.before(item, secondItem); // insert before secondItem
itemsList.appendChild(item); // append to the end
itemsList.prepend(item); // prepend to the beginning

secondItem.before(item); // insert before secondItem without call itemsList
secondItem.after(item); // insert after secondItem without call itemsList

newElement.remove(); // remove the newElement

const parentElement = newElement.parentElement;
parentElement.removeChild(newElement); // remove the newElement by parentElement

// - DOM's elements (Document Object Model)
function showMsg() {
    console.log('Hello JavaScript!');
}
const sendButton = document.querySelector('#sendButton');
sendButton.addEventListener('click', showMsg); // trigger the showMsg function when the button is clicked

sendButton.addEventListener('click', () => {
    console.log('Hello JavaScript!');
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
}); // trigger the function when the DOM is fully loaded and parsed

sendButton.addEventListener('mouseenter', () => {
    sendButton.style.backgroundColor = 'red';
}); // trigger the function when the mouse enters the button

const form = document.querySelector('form');
form.addEventListener("submit", (event) => {
    // code to handle form submission
    event.preventDefault(); // prevent the default form submission behavior
    console.log("Form submitted");
})


