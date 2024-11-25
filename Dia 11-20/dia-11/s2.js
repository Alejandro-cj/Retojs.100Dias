//Solución 2: Usando reduce()
// Función para sumar los números de un array con reduce
function sumaArray(array) {
    return array.reduce((acumulador, numero) => {
        if (typeof numero === "number") { // Validamos que sea un número
            return acumulador + numero;
        } else {
            return acumulador;
        }
    }, 0); // El acumulador empieza en 0
}

// Prueba la función
let numeros = [10, 20, "hola", 30, 40];
console.log(`La suma del array es: ${sumaArray(numeros)}`); // 100
