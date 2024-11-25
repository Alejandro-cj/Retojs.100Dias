// solucion 1 
//Función para encontrar el número más grande en un array
function encontrarMayor(array) {
    let mayor = array[0]; // Suponemos que el primer número es el mayor
    for (let numero of array) {
        if (numero > mayor) {
            mayor = numero; // Actualizamos el mayor si encontramos uno más grande
        }
    }
    return mayor;
}

// Prueba la función
let numeros = [34, 78, 12, 56, 99, 23];
console.log(`El número más grande es: ${encontrarMayor(numeros)}`);


