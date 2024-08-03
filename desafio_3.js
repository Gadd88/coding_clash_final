// CODING CLASH FINAL - BINARY NINJAS
console.log("Hola, probando, 123");
// holaaa
//esta funcionando
// hay un comando ahi ta

console.log("👌");
const textoPrueba = "Hola mundo";
const desplazamientoPrueba = 3;
const letras = "abcdefghijklmnopqrstuvwxyz";

const cifrado = (
  texto = textoPrueba,
  desplazamiento = desplazamientoPrueba
) => {
  if (texto.trim().length < 1) throw new Error("Necesitas un texto");
  if (!Number(desplazamiento)) throw new Error("Necesitas un valor numérico entero para el cifrado");
  let textoCifrado = "";
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i].toLowerCase();
    if (caracter === " ") {
      textoCifrado += caracter;
      continue;
    }
    let posicionAlfabeto = [...letras].findIndex((letra) => letra === caracter);
    const nuevoCaracter = [posicionAlfabeto + desplazamiento] <= 25 ? letras[posicionAlfabeto + desplazamiento] : letras[posicionAlfabeto + desplazamiento - letras.length];
    textoCifrado += nuevoCaracter;
  }
  return(textoCifrado);
};

const nuevaFrase = cifrado()

console.log(nuevaFrase)
