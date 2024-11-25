// Función para sumar los números de un array
function sumaArray(array) {
    let suma = 0; // Inicializamos la suma en 0
    for (let numero of array) {
        if (typeof numero === "number") { // Validamos que el elemento sea numérico
            suma += numero;
        }
    }
    return suma;
}

// Prueba la función
let numeros = [10, 20, 30, 40];
console.log(`La suma del array es: ${sumaArray(numeros)}`); // 100
