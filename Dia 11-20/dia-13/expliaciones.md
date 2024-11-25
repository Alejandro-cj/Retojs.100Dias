Día 13: Ordenar un array de números
Descripción:
Hoy aprenderás a ordenar un array de números en orden ascendente o descendente. Este reto te permitirá practicar con el método sort() y trabajar con comparaciones.

Objetivo:
Usar el método sort() para ordenar arrays.
Controlar el orden de clasificación (ascendente o descendente).
Entender cómo el método sort() funciona con números.
Instrucciones:
Crea una función llamada ordenarArray que reciba un array de números y un parámetro opcional para determinar el orden (ascendente o descendente).
Ordena el array en el orden especificado.
Devuelve el array ordenado.
___________________________________________
Explicación:
sort(): Este método ordena los elementos de un array. Por defecto, ordena en orden lexicográfico (alfabético), lo cual no funciona correctamente con números.
Función de comparación (a, b) => a - b:
Si el resultado de a - b es negativo, a aparecerá antes que b (ascendente).
Si es positivo, b aparecerá antes que a (descendente).
Parámetro orden: Permite determinar el orden de clasificación. El valor por defecto es "ascendente", pero si se pasa "desc", ordenará en orden descendente.
Tarea adicional:
Asegúrate de que la función pueda manejar arrays con números negativos o decimales.
Agrega validaciones para que el parámetro orden solo acepte los valores "asc" y "desc".
Haz que la función devuelva un mensaje si el array está vacío.
