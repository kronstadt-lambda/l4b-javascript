// 1. Crea una RegEx que valide correos electrÃ³nicos

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

function validateEmail(email) {
    const isValid = emailRegex.test(email)
    if (isValid) {
        console.log(`"${email}" es un correo electrÃ³nico vÃ¡lido`)
    } else {
        console.log(`"${email}" NO es un correo electrÃ³nico vÃ¡lido`)
    }
    return isValid
}

console.log("ValidaciÃ³n de correos electrÃ³nicos:")
validateEmail("brais@gmail.com")
validateEmail("brais.moure@gmail.com")
validateEmail("braise@gmail")
validateEmail("brais@.com")

// 2. Crea una RegEx obtenga Hashtags de un Texto

const hashtagRegex = /#[a-zA-Z0-9_\u00F1\u00D1]+/g

function extractHashtags(text) {
    const hashtags = text.match(hashtagRegex) || []
    return hashtags
}

const tweet = "Aprendiendo #JavaScript y #ExpresionesRegulares en el curso de #JavaScriptIntermedio de MoureDev. #JS #Dev #Coding"

const foundHashtags = extractHashtags(tweet)
console.log("\nHashtags encontrados:")
console.log(foundHashtags)

const tweetSinHashtags = "Este texto no tiene ninguna etiqueta especial"
console.log("\nBuscando hashtags en:")
console.log(tweetSinHashtags)
console.log(extractHashtags(tweetSinHashtags))

// 3. Crea una RegEx que valide contraseÃ±as seguras (mÃ­nimo 8 caracteres, al menos una letra y un nÃºmero)

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/

function validatePassword(password) {
    const isValid = passwordRegex.test(password)
    if (isValid) {
        console.log(`"${password}" es una contraseÃ±a vÃ¡lida`)
    } else {
        console.log(`"${password}" NO es una contraseÃ±a vÃ¡lida. Debe tener al menos 8 caracteres, incluyendo al menos una letra y un nÃºmero.`)
    }
    return isValid
}

console.log("\nValidaciÃ³n de contrasenas:")
validatePassword("abc123xyz")
validatePassword("pass123")
validatePassword("password")
validatePassword("12345678")
validatePassword("Abcd1234")