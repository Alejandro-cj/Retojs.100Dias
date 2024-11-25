// solucion 2
// Función para encontrar el número más grande usando Math.max
function encontrarMayor(array) {
    return Math.max(...array);
}

// Prueba la función
let numeros = [34, 78, 12, 56, 99, 23];
console.log(`El número más grande es: ${encontrarMayor(numeros)}`);