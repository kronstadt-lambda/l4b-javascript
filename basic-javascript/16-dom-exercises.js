// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "Â¡Hola Mundo!"" al cargar la pÃ¡gina

document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.createElement("h1")
    titleElement.id = "title"
    titleElement.textContent = "Â¡Hola Mundo!"
    document.body.appendChild(titleElement)
})

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.createElement("img")
    imageElement.id = "myImage"
    imageElement.src = "https://picsum.photos/150"
    document.body.appendChild(imageElement)

    setTimeout(() => {
        imageElement.src = "https://picsum.photos/300"
    }, 2000)
})

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la pÃ¡gina

document.addEventListener("DOMContentLoaded", () => {
    const boxElement = document.createElement("div")
    boxElement.id = "box"
    boxElement.textContent = "Este es un div con clase resaltado"
    document.body.appendChild(boxElement)

    boxElement.classList.add("resaltado")
})

// 4. Crea un pÃ¡rrafo con id="paragraph" y cambia su color de texto a azul

document.addEventListener("DOMContentLoaded", () => {
    const paragraphElement = document.createElement("p")
    paragraphElement.id = "paragraph"
    paragraphElement.textContent = "Este pÃ¡rrafo tiene texto azul"
    document.body.appendChild(paragraphElement)

    paragraphElement.style.color = "blue"
})

// 5. Agrega un botÃ³n que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

document.addEventListener("DOMContentLoaded", () => {
    const listElement = document.createElement("ul")
    listElement.id = "list"
    document.body.appendChild(listElement)

    const buttonElement = document.createElement("button")
    buttonElement.textContent = "Agregar elemento"
    document.body.appendChild(buttonElement)

    buttonElement.addEventListener("click", () => {
        const newItem = document.createElement("li")
        newItem.textContent = "Nuevo elemento"
        listElement.appendChild(newItem)
    })
})

// 6. Crea un pÃ¡rrafo con id="deleteParagraph" y un botÃ³n. Al hacer clic en el botÃ³n, elimina el pÃ¡rrafo del DOM

document.addEventListener("DOMContentLoaded", () => {
    const deleteParagraph = document.createElement("p")
    deleteParagraph.id = "deleteParagraph"
    deleteParagraph.textContent = "Este pÃ¡rrafo se eliminarÃ¡ al hacer clic en el botÃ³n"
    document.body.appendChild(deleteParagraph)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Eliminar pÃ¡rrafo"
    document.body.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        deleteParagraph.remove()
    })
})

// 7. Crea un <div id="content"> con algÃºn texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.createElement("div")
    contentDiv.id = "content"
    contentDiv.textContent = "Contenido original que serÃ¡ reemplazado"
    document.body.appendChild(contentDiv)

    setTimeout(() => {
        contentDiv.innerHTML = "<h2>Nuevo Contenido</h2>"
    }, 3000)
})

// 8. Crea un botÃ³n con id="greetBtn" y aÃ±ade un evento que muestre una alerta con el mensaje "Â¡Hola!" al hacer clic

document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.createElement("button")
    greetButton.id = "greetBtn"
    greetButton.textContent = "Saludar"
    document.body.appendChild(greetButton)

    greetButton.addEventListener("click", () => {
        alert("Â¡Hola!")
    })
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.createElement("input")
    inputElement.id = "textInput"
    inputElement.type = "text"
    inputElement.placeholder = "Escribe algo aquÃ­"
    document.body.appendChild(inputElement)

    const resultDiv = document.createElement("div")
    resultDiv.id = "result"
    resultDiv.textContent = "El texto aparecerÃ¡ aquÃ­"
    document.body.appendChild(resultDiv)

    inputElement.addEventListener("input", () => {
        resultDiv.textContent = inputElement.value
    })
})

// 10. Crea un botÃ³n con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

document.addEventListener("DOMContentLoaded", () => {
    const backgroundButton = document.createElement("button")
    backgroundButton.id = "backgroundBtn"
    backgroundButton.textContent = "Cambiar color de fondo"
    document.body.appendChild(backgroundButton)

    backgroundButton.addEventListener("click", () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        document.body.style.backgroundColor = randomColor
    })
})