const cadena1 = "((()))";
const cadena2 = "(())";

const revisarParentesis = (string = cadena1) => {
  if (!string.includes("(") && !string.includes(")"))
    return "El string no contiene parentesis";
  let arrayCierres = [];
  let arrayAbiertos = [];
  for (let caracter of string) {
    if (caracter === ")") {
      const cierre = string.indexOf(
        ")",
        arrayCierres[arrayCierres.length - 1] + 1
      ); //busca a partir del indice del ultimo ")" encontrado
      arrayCierres.push(cierre);
    }
    if (caracter === "(") {
      arrayAbiertos.push(caracter);
    }
  }
  return arrayAbiertos.length === arrayCierres.length;
};

console.log(revisarParentesis());
