function verificarNumeros() {
  let par = 0
  let impar = 0
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      par++
    } else {
      impar++
    }
  }
  console.log(`Numeros par ${par}, numeros impar ${impar}`)
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
verificarNumeros()

