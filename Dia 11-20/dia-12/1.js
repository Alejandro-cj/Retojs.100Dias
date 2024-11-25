// Función para contar las vocales en una cadena
function contarVocales(cadena) {
    const vocales = "aeiou"; // Definimos las vocales
    let contador = 0;

    for (let letra of cadena.toLowerCase()) { // Convertimos todo a minúsculas
        if (vocales.includes(letra)) { // Verificamos si la letra es una vocal
            contador++;
        }
    }
    return contador;
}

// Prueba la función
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("Javascript es divertido")); // 8
