// Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Prueba la función
let texto = "JavaScript es genial";
let textoInvertido = invertirCadena(texto);

console.log(`Texto original: "${texto}"`);
console.log(`Texto invertido: "${textoInvertido}"`);
