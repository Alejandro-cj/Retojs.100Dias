// Función para determinar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

// Prueba la función con diferentes números
esParOImpar(4); // Debería imprimir: "El número 4 es par."
esParOImpar(7); // Debería imprimir: "El número 7 es impar."
