const arrayPrueba = ["casa", "perro", "gato", "elefante", "pez"];
const nPrueba = 5;
const juegoDePalabras = (array = arrayPrueba, num = nPrueba) => {
    if(!array.length) return ('Necesita un array con al menos 1 palabra')
  const resultado =  []
  for (const palabra of array) {
    if(palabra.length === num) resultado.push(palabra)
  }
  return resultado.length > 0 ? resultado : "No hay palabras que coincidan con esa cantidad de caracteres"
}


console.log(juegoDePalabras());