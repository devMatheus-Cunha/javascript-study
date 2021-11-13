function gerarNumeroAletorio(min,max) {
  const valor = Math.random() * (max-min)+min
  return Math.floor(valor)
}

let opcao = 0

do {
  opcao = gerarNumeroAletorio(1,10)
  console.log(`O valor tirado é ${opcao}`)
} while (opcao != 1)