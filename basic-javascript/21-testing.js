// Testing

/*
To set up Jest in your Node.js project:

1. Initialize npm project (if not already done):
   npm init -y

2. Install Jest as a development dependency:
   npm install --save-dev jest

3. Update package.json to add test script:
   {
     "scripts": {
       "test": "jest"
     }
   }

4. Run tests:
   npm test
*/

// - Types of testing
// a) Unitary testing

function multiply(a, b) {
    return a * b;
}

module.exports = multiply;

// Jest unit test example:
// test('multiply 2 x 3 should equal 6', () => {
//     expect(multiply(2, 3)).toBe(6);
// });

console.log(multiply(2, 3) === 6);

// b) Integration testing
// Integration testing is a type of software testing where individual components
// or modules are combined and tested as a group. It focuses on verifying that
// different parts of an application work together correctly, testing the
// interaction between integrated components, interfaces, and complete systems.

// Jest integration test example:
// describe('API integration', () => {
//     test('should fetch user data', async () => {
//         const userData = await fetchUserData(1);
//         expect(userData).toHaveProperty('name');
//     });
// });

// c) Test end-to-end (E2E)
// For E2E testing, consider using additional tools like:
// - Cypress (npm install cypress)
// - Playwright (npm install playwright)
// These tools allow testing the application from user's perspective

