# Números Amigables

Implementa una función que determine si dos números son "amigables". Dos números son amigables si la suma de los divisores propios de uno de los números es igual al otro número, y viceversa.

### Objetivo

El objetivo es identificar correctamente si dos números son amigables.

Ejemplo de entrada y salida
Entrada:

```js
const num1 = 220;
const num2 = 284;
```

Salida:

```js
true;
```

### Pistas

- Un divisor propio de un número es un divisor que no incluye al propio número.
- Implementa una función auxiliar para calcular la suma de los divisores propios de un número.
- Compara las sumas de los divisores propios de ambos números.
