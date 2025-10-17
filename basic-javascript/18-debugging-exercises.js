
function calculateFactorial(n) {
    let result = 0; // Error lógico: debería inicializarse en 1

    for (let i = n; i > 0; i--) {
        result = result + i; // Error lógico: debería multiplicar, no sumar
    }

    return result;
}

// Ejemplo de uso:
console.log(calculateFactorial(5)); // Resultado incorrecto: 15
// Resultado esperado: 120
