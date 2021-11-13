//*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function calculo(divisor,dividendo) {
  console.log(`Resultado é = ${Math.floor(divisor / dividendo)}`)
  console.log(`Resto é = ${divisor % dividendo}`)
}

// calculo(10,2)
calculo(11, 4)

