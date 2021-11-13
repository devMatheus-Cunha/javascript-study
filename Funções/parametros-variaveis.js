function soma() {
  let soma = 0 
  for(i in arguments){ // arguements e um array interno de uma função onde podemos pegar todos os elementos passados, como os parametros no caso 
    soma += arguments[i] // em arguments[i] conseguimos pegar todos os elementos desse array e somar a soma 
  }
  return soma //  vai passar todos os resultados dos paramentros passasdos 
}

console.log(soma(2,3,2)) // ira fazer a soma = 7
console.log(soma(2)) // ira passar soma = 2 pois soma ja possui 0
console.log(soma(' matheus ','gomes')) // ira passar 0 que ja e o valor da soma e concatenar as string 
console.log(soma(4,'matheus'))