Día 10: FizzBuzz
Descripción:
Hoy implementarás uno de los retos clásicos en programación: FizzBuzz. Tu tarea será imprimir números del 1 al 100, pero con reglas especiales:

Si el número es divisible por 3, imprime "Fizz".
Si el número es divisible por 5, imprime "Buzz".
Si el número es divisible por 3 y 5, imprime "FizzBuzz".
Para todos los demás números, imprime el número.
Objetivo:
Usar bucles para iterar del 1 al 100.
Aplicar condicionales para verificar divisibilidad usando el operador %.
Practicar la concatenación y salida de texto con console.log().
Instrucciones:
Crea una función llamada fizzBuzz que no reciba parámetros.
Usa un bucle para recorrer los números del 1 al 100.
Aplica las reglas mencionadas para determinar qué imprimir.
_______________________________________________
Explicación:
Bucle for: Itera del 1 al 100 usando i como contador.
Condicionales:
Primero, verifica si el número es divisible por 3 y 5 usando i % 3 === 0 && i % 5 === 0 y si es así, imprime "FizzBuzz".
Luego, verifica si es divisible solo por 3 o solo por 5 e imprime "Fizz" o "Buzz" según corresponda.
Si no cumple ninguna condición, imprime el número.
Orden de las condiciones: Es importante comprobar primero si es divisible por ambos números (3 y 5) para evitar casos incorrectos.
Tarea adicional:
Modifica el rango de números (por ejemplo, de 1 a 50 o de 1 a 200).
Cambia las palabras "Fizz" y "Buzz" por otras palabras de tu elección.
Haz que la función reciba un rango personalizado como parámetros (inicio y fin).