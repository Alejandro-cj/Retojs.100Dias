// Función para ordenar un array de números
function ordenarArray(array, orden = "asc") {
    return array.sort((a, b) => {
        if (orden === "asc") {
            return a - b; // Orden ascendente
        } else {
            return b - a; // Orden descendente
        }
    });
}

// Prueba la función
let numeros = [10, 5, 8, 20, 3];
console.log(ordenarArray(numeros)); // Orden ascendente: [3, 5, 8, 10, 20]
console.log(ordenarArray(numeros, "desc")); // Orden descendente: [20, 10, 8, 5, 3]
