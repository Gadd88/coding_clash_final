const mapeo = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}

const digitosPrueba = '234'

const combinacionesPosibles = (digitos = digitosPrueba) => {
    const letras = []
    const combinaciones = []
    for (const num of digitos) {
        const valores = mapeo[num]
        letras.push(valores)    
    }
    for(let i = 0; i < letras.length; i++){
        //i = letras[i]
        for(let j = 0; j < letras[i].length; j++){
            //j = letras[i][j]
            for(let k = i + 1; k < letras.length; k++){
              for(let l = 0; l < letras[i].length; l++){
                combinaciones.push(letras[i][j].concat(letras[k][l]))
              }
            }
        }
    }
    return combinaciones
}
console.log(combinacionesPosibles())
// console.log(mapeo[2], mapeo[3])

