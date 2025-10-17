async function getPosts(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return {data: data, status: response.status};
}
async function createPost(url, newPost) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return {data: data, status: response.status};
}
async function putPost(url, updatedPost) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return {data: data, status: response.status};
}
async function updatePost(url, piecePost) {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(piecePost)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return {data: data, status: response.status};
}
async function deletePost(url) {
    const response = await fetch(url, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return {data: data, status: response.status};
}

// Exercise 1:
console.log("Exercise 1");
try {
    const { data, status } = await getPosts('https://jsonplaceholder.typicode.com/posts');
    // console.log(data);
} catch (error) {
    console.log("Failed to fetch posts: ", error);
}
// Exercise 2:
console.log("Exercise 2");
try {
    const { data, status } = await getPosts('https://jsonplaceholder.typicode.com/poststeouhnoahur');
    // console.log(data);
} catch (error) {
    console.log("Failed to fetch posts: ", error);
}
// Exercise 3:
console.log("Exercise 3");
console.log("echo");
// Exercise 4:
console.log("Exercise 4");
try {
    const newPost = {
        userId: 2,
        title: "This a post's title",
        body: "This is a post's body",
    }

    const { data, status } = await createPost('https://jsonplaceholder.typicode.com/posts', newPost);
    // console.log(data);
    // console.log(`Status: ${status}`)
} catch (error) {
    console.log("Failed to create post: ", error);
}

// Exercise 5:
console.log("Exercise 5");
try {
    const updatedPost = {
        id:42,
        userId: 6,
        title: "Titulo actualizado",
        body: "Body actualizado",
    }

    const { data, status } = await putPost('https://jsonplaceholder.typicode.com/posts/42', updatedPost);
    // console.log(data);
    // console.log(`Status: ${status}`)
} catch (error) {
    console.log("Failed to create post: ", error);
}
// Exercise 6:
console.log("Exercise 6");
try {
    const piecePost = {
        userId: 2,
        title: "Update title",
        body: "This is a post's body update",
    }

    const { data, status } = await updatePost('https://jsonplaceholder.typicode.com/posts/2', piecePost);
    // console.log(data);
    // console.log(`Status: ${status}`)
} catch (error) {
    console.log("Failed to create post: ", error);
}
// Exercise 7:
console.log("Exercise 7");
try {
    const { data, status } = await deletePost('https://jsonplaceholder.typicode.com/posts/3');
    // console.log(data);
    // console.log(`Status: ${status}`)
} catch (error) {
    console.log("Failed to delete post: ", error);
}
// Exercise 8:
console.log("Exercise 8");
async function getWeather(city) {
    const apiKey = "a8aae62043421871891cbf5917615c7c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data: data, response: response}
}
try {
    const { data, response } = await getWeather('Lima');
    // console.log(data);
    // console.log(response);
} catch (error) {
    console.log("Failed to fetch weather: ", error);
}
// Exercise 9:
console.log("Exercise 9");
function getEvolutionPaths(chain) {
    const paths = [];
    (function dfs(node, path = []) {
        const cur = [...path, node.species.name];
        if (!node.evolves_to || node.evolves_to.length === 0) {
            paths.push(cur);
        } else {
            for (const next of node.evolves_to) dfs(next, cur);
        }
    })(chain);
    return paths;
}
function showPokeFeatures(pokemon, species, evolution, evolutionPaths) {
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const color = species.color.name;
    const habitat = species.habitat.name;
    const chainEvolution = evolutionPaths.map(path => path.join(' -> ')).join('\n');
    console.group(`Name: ${name}`);
    console.log(`Height: ${height}`);
    console.log(`Weight: ${weight}`);
    console.log(`Color: ${color}`);
    console.log(`Habitat: ${habitat}`);
    console.log(`Evolution Chain: ${chainEvolution}`);
    console.groupEnd();
}

try {
    const pokeName = 'charmander';
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const { data: pokemon, } = await getPosts(urlPokemon);
    const { data: species, } = await getPosts(pokemon.species.url);
    const {data: evolution, } = await getPosts(species.evolution_chain.url);
    const paths = getEvolutionPaths(evolution.chain);
    showPokeFeatures(pokemon, species, evolution, paths);
} catch (error) {
    console.log("Failed to fetch pokemon: ", error);
}

// Exercise 10:
console.log("Exercise 10");
console.log("echo");

