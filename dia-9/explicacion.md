Día 9: Palíndromo
Descripción:
Hoy trabajarás con cadenas para determinar si un texto es un palíndromo. Un palíndromo es una palabra, frase o número que se lee igual hacia adelante que hacia atrás (ignora espacios, mayúsculas y signos de puntuación).

Objetivo:
Manipular cadenas para ignorar espacios y caracteres no alfabéticos.
Comparar una cadena original con su versión invertida.
Aplicar funciones como toLowerCase(), replace() y split().
Instrucciones:
Crea una función llamada esPalindromo que reciba una cadena como parámetro.
Limpia la cadena eliminando espacios, signos de puntuación y convirtiéndola a minúsculas.
Verifica si la cadena limpia es igual a su versión invertida.
Devuelve true si es un palíndromo, o false si no lo es.
__________________________________________-
Explicación:
toLowerCase(): Convierte toda la cadena a minúsculas para evitar errores de comparación por mayúsculas/minúsculas.
replace(/[^a-z0-9]/g, ''): Elimina caracteres que no sean letras o números, como espacios o signos de puntuación, usando una expresión regular.
split('').reverse().join(''): Invierte la cadena dividiéndola en un array de caracteres, invirtiendo el array y volviendo a unirlo.
Comparación: Si la cadena limpia es igual a la invertida, es un palíndromo.
Tarea adicional:
Agrega validaciones para manejar cadenas vacías o nulas.
Haz que la función sea insensible a tildes (por ejemplo, luz azul debería ser un palíndromo).
Amplía la función para trabajar con números, por ejemplo, 12321 o 20202.