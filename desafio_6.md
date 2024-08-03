# Combinaciones de Teléfono

Implementa una función que, dada una cadena que contiene solo dígitos del 2 al 9, devuelva todas las combinaciones posibles de letras que los números podrían representar en un teclado de teléfono. El mapeo de dígitos a letras es el mismo que en un teléfono tradicional (por ejemplo, 2 corresponde a ["a", "b", "c"]).

### Objetivo

El objetivo es generar todas las combinaciones de letras que pueden formarse a partir de la secuencia de dígitos dada.

Ejemplo de entrada y salida
Entrada:

```js
const digitos = "23";
```

Salida:

```js
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
```

### Pistas

- Usa un mapeo de los dígitos a sus correspondientes letras.
- Utiliza recursión para generar todas las combinaciones posibles.
