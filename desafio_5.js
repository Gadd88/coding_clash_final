const sacarSumaDivisores = (num)=>{
  if (!Number(num)) return "La funcion solo admite numeros"
  let divisores = []
  for (let i = 0; i < Math.sqrt(num); i++) {
    if(num %i ===0) {
        if(num/i === num) {
          divisores.push(i )
        }else{
          divisores.push(i, num/i === num ? null : num/i )
        }
    }
  }
  return divisores.sort((a,b) => a-b).reduce((acc, item)=> acc+ item,0 )
}

const sonAmigables = (num1=1184, num2=1210) => {
  return sacarSumaDivisores(num1) === num2 && sacarSumaDivisores(num2) === num1
}

console.log(sonAmigables());