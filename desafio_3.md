# Cifrado César

Implementa una función que cifre un texto utilizando el cifrado César. El cifrado César desplaza cada letra del texto un número fijo de posiciones en el alfabeto. La función debe recibir el texto y el número de posiciones a desplazar. Asume que el texto solo contiene letras minúsculas y espacios.

### Objetivo

El objetivo es implementar un algoritmo que cifre correctamente el texto utilizando el cifrado César.

Ejemplo de entrada y salida

Entrada:

```js
const texto = "hola mundo";
const desplazamiento = 3;
```

Salida:

```js
"krptexd pxqgr";
```

### Pistas

- Usa el código ASCII para determinar la nueva posición de cada letra.
- Asegúrate de manejar el ciclo del alfabeto (por ejemplo, después de 'z' viene 'a').
- Mantén los espacios sin cambios.
