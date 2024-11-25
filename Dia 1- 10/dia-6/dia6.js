// Función para realizar una cuenta regresiva
function cuentaRegresiva(numero) {
    for (let i = numero; i >= 0; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 0) {
                console.log("¡Despegue! 🚀");
            }
        }, (numero - i) * 1000); // Ajusta el tiempo para cada número
    }
}

// Llama a la función con un número inicial
cuentaRegresiva(5);
