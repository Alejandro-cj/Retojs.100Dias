// Función para generar un número aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Prueba la función con diferentes rangos
let aleatorio1 = numeroAleatorio(1, 10);
console.log(`Número aleatorio entre 1 y 10: ${aleatorio1}`);

let aleatorio2 = numeroAleatorio(20, 50);
console.log(`Número aleatorio entre 20 y 50: ${aleatorio2}`);
