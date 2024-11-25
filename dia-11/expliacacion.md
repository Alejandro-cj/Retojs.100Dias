Día 11: Suma de números en un array
Descripción:
Hoy trabajarás con arrays y aprenderás a sumar todos los elementos de un array de números. Este reto te permitirá practicar bucles y métodos como reduce().

Objetivo:
Recorrer un array para acumular un valor.
Usar tanto bucles como métodos funcionales.
Manejar arrays vacíos o con valores no numéricos.
Instrucciones:
Crea una función llamada sumaArray que reciba un array como parámetro.
Recorre el array y suma todos los elementos.
Devuelve la suma total.
Maneja casos donde el array esté vacío o tenga valores no numéricos.
_____________________________________________________________________
Explicación:
Solución 1 (Bucle):
Inicializamos una variable suma en 0.
Recorremos cada elemento del array con un bucle for...of.
Si el elemento es un número (typeof numero === "number"), lo sumamos a suma.
Solución 2 (reduce()):
reduce() acumula un valor inicial (en este caso, 0) aplicando una función a cada elemento del array.
Validamos que cada elemento sea numérico antes de sumarlo al acumulador.
Tarea adicional:
Haz que la función devuelva un mensaje si el array está vacío o no tiene números válidos.
Permite que la función acepte arrays con números negativos y decimales.
Modifica la función para devolver también el promedio de los números.
