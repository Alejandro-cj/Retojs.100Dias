Día 12: Contar vocales en una cadena
Descripción:
Hoy aprenderás a analizar cadenas y contar cuántas vocales contiene un texto dado. Este reto te ayudará a practicar cómo recorrer cadenas y trabajar con comparaciones.

Objetivo:
Usar bucles para recorrer cadenas de texto.
Contar caracteres específicos (en este caso, vocales).
Manejar cadenas insensibles a mayúsculas y minúsculas.
Instrucciones:
Crea una función llamada contarVocales que reciba una cadena como parámetro.
Cuenta cuántas vocales (a, e, i, o, u) hay en la cadena.
Devuelve el total de vocales encontradas.
____________________________________________-
Explicación:
Solución 1 (Bucle):
Convertimos la cadena a minúsculas usando toLowerCase().
Recorremos cada letra con un bucle for...of.
Si la letra está en la lista de vocales (includes()), aumentamos el contador.
Solución 2 (Expresión Regular):
La expresión /[aeiou]/gi busca todas las vocales (a, e, i, o, u) ignorando mayúsculas (i) y buscando en toda la cadena (g).
Si no hay coincidencias, devolvemos 0 (para manejar cadenas sin vocales).
Tarea adicional:
Haz que la función devuelva también cuántas veces aparece cada vocal.
Modifica la función para que cuente vocales con acentos (á, é, í, ó, ú).
Asegúrate de que la función maneje cadenas vacías o nulas.
