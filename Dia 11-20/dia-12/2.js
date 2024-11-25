// Función para contar las vocales con expresiones regulares
function contarVocales(cadena) {
    const coincidencias = cadena.match(/[aeiou]/gi); // Busca todas las vocales (insensible a mayúsculas)
    return coincidencias ? coincidencias.length : 0; // Si hay coincidencias, devuelve su cantidad
}

// Prueba la función
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("Javascript es divertido")); // 8
