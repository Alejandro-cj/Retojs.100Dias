Día 5: Generar un número aleatorio
Descripción:
Hoy aprenderás a usar funciones nativas de JavaScript para trabajar con números aleatorios. Tu tarea es escribir un programa que genere un número aleatorio entre dos valores que tú especifiques.

Objetivo:
Usar la función Math.random() para generar números aleatorios.
Manipular números para ajustar rangos.
Entender cómo redondear números con Math.floor().
Instrucciones:
Crea una función llamada numeroAleatorio que reciba dos parámetros: min y max.
La función debe devolver un número aleatorio entre el rango especificado (incluyendo min y max).
Muestra el resultado en la consola llamando a la función con diferentes valores para min y max.

---------------
Explicación:
Math.random(): Genera un número decimal entre 0 (inclusive) y 1 (exclusivo).
Ajustar el rango: Multiplicamos Math.random() por (max - min + 1) para ajustar el rango.
Redondear: Usamos Math.floor() para redondear el número hacia abajo y garantizar que sea entero.
Sumar el mínimo: Finalmente, sumamos min para ajustar el rango al valor inicial deseado.
Tarea adicional:
Asegúrate de que min sea menor que max. Si no lo es, intercambia sus valores dentro de la función.
Genera múltiples números aleatorios en un rango y guárdalos en un array.
Usa esta función para simular el lanzamiento de un dado (número aleatorio entre 1 y 6).
