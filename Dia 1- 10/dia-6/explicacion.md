Día 6: Cuenta regresiva
Descripción:
Hoy vas a crear un programa que realice una cuenta regresiva desde un número inicial hasta 0. Esto te ayudará a practicar los bucles (for o while) y trabajar con temporizadores en JavaScript.

Objetivo:
Utilizar bucles para repetir una tarea.
Trabajar con la función setTimeout() para introducir retrasos.
Mostrar mensajes en la consola de forma controlada.
Instrucciones:
Crea una función llamada cuentaRegresiva que reciba un número como parámetro.
Usa un bucle para mostrar cada número desde el inicial hasta 0 en la consola.
Agrega un pequeño retraso entre cada número usando setTimeout().

---------------------
Explicación:
Bucle for: Se usa para contar hacia atrás desde el número inicial hasta 0.
setTimeout(): Introduce un retraso en la ejecución de cada iteración. Multiplicamos el tiempo (1000 ms) por (numero - i) para que cada número aparezca después del anterior.
Mensaje final: Cuando el contador llega a 0, imprimimos "¡Despegue! 🚀".
Tarea adicional:
Cambia el intervalo de tiempo para que la cuenta regresiva sea más rápida o más lenta.
Agrega una validación para evitar que el usuario introduzca números negativos.
Muestra cada número en la pantalla usando document.body.innerHTML en lugar de console.log().