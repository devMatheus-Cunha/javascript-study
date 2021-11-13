const numeros = [1,5,6,10, 11, 12, 13,17, 18, 19, 20,32,412,512,24,26]
let quantidade = []
for (let i = 0; i < numeros.length; i++) {
  if ( numeros[i] >= 10 && numeros[i] <= 20) {
    quantidade++
  }
}
console.log(quantidade)

