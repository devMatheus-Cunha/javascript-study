function gerarNumeroEntre(min, max, numerosProbidos) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    if (numerosProbidos.includes(aleatorio)) { // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
      reject('Repetiu um numero!')
    } else {
      resolve(aleatorio)
    }

  })  
}

async function gerarMegaSena(qtdeNumeros) {
  // Try e Catch e para fazer o tratamento de erro no async e dentro do try vc coloca o codigo que pode ter um possivel erro e o catch vc coloca oq esse erro vai retornar
  try {
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros
  } catch{
    throw "Repetiu um numero" // jeito de rejeitar um promise dentro de um async e gerando essa exeção
  }
}
gerarMegaSena(10)
  .then(console.log)
  .catch(console.log)
