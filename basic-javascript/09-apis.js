// APIs: Application Programming Interfaces

// - APIs REST: Representational State Transfer.
// This kind of APIs are used to communicate with a server using HTTP requests and URLs to get and send data.
// Use files like .json or .xml to store data or exchange data with other applications.
// Then there are 3 standards (HTML + URL + JSON)

// - Method HTTP:
// a) GET: To get data from a server (any).
// b) POST: To send data to a server.
// c) PUT: To update data on a server.
// d) DELETE: To delete data from a server.


// HTTP code response:
// 200: OK
// 201: Created
// 204: No Content
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error

// Consume APIs from JavaScript:
// Use jsonplaceholder.typicode.com to test APIs. It's a free API to test and learn.
// - fetch (GET request):
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(async (response) => { // transform the response to JSON
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
//         const data = await response.json();
//         return data;
//     })
//     .then(data => { // process the data
//         console.log(typeof data);
//         console.log("data: ", data)
//     })
//     .catch(error => console.log("Error: ", error)) // catch errors

// Use of async/await:

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data: data,
            response: response,
            // status: response.status,
            // statusText: response.statusText,
            // ok: response.ok,
            // headers: response.headers,
            // url: response.url,
            // redirected: response.redirected,
            // type: response.type,
            // bodyUsed: response.bodyUsed,
            // body: response.body,
        };
    } catch (error) {
        console.log("Error: ", error);
    }
}
let url = 'https://jsonplaceholder.typicode.com/posts'
// const posts = await getPosts(url);
// console.log(typeof posts);
// console.log("data: ", posts.data)
// console.log("response: ", posts.response)

// POST request:
async function createPost(url) {
    try {
        const newPost = {
            userId: 1,
            title: "This a post's title",
            body: "This is a post's body",
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        return {
            data: data,
            response: response
        };
    } catch (error) {
        console.log("Error: ", error);
    }
}

// const aPost = await createPost(url);
// console.log("data: ", aPost.data)
// console.log("response: ", aPost.response)

// Research over HTTP clients.
// This is a good example of how to use objects to represent HTTP requests.

// Handle of errors:
// fetch('https://jsonplaceholder.typicode.com/postseouou')
//     .then((response) => {
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
//         return response.json();
//     })
//     .catch(error => console.log("Error: ", error))

// Additional methods:
// - PATCH: To update partially a data on a server.
// - OPTIONS: To get information about the server.
async function partialPostUp(url) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: "This a post's title"})
        });
        const data = await response.json();
        return {
            data: data,
            response: response
        };
    } catch (error) {
        console.log("Error: ", error);
    }
}
// let urlResource = 'https://jsonplaceholder.typicode.com/posts/1'
// const aPatch = await partialPostUp(urlResource);
// console.log("data: ", aPatch.data)
// console.log("response: ", aPatch.response)

// Authentication by API key:
// This is used to authenticate a user to a server and allows interactions with the server.
// https://openweathermap.org/ --> Open API

async function getWeather(city) {
    const apiKey = "a8aae62043421871891cbf5917615c7c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data: data,
            response: response
        };
    } catch (error) {
        console.log("Error: ", error);
    }
}
// const aWeather = await getWeather("London")
// console.log("data: ", aWeather.data)
// console.log("response: ", aWeather.response)

// Other methods for authentication:
// - Basic Authentication:
// - Bearer Authentication:
// - OAuth 2.0:
// - API Keys:
// - JSON Web Tokens (JWT):

// API versions:
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Other APIs:
async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data: data,
            response: response
        };
    } catch (error) {
        console.log("Error: ", error);
    }
}

const aPokemon = await getPokemon("pikachu");
// console.log("data: ", aPokemon.data)
// console.log("response: ", aPokemon.response)
aPokemon.data.abilities.forEach(ability => {
    console.log(ability.ability.name)
})