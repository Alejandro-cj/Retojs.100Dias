// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    // Elimina espacios y caracteres especiales, y convierte a minúsculas
    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Invierte la cadena limpia
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    
    // Compara la cadena limpia con la invertida
    return cadenaLimpia === cadenaInvertida;
}

// Prueba la función
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("No es un palíndromo")); // false
console.log(esPalindromo("A Santa at NASA")); // true
