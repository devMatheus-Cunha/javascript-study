function numerosAletorios(min, max) {
  const valor =  Math.random() * (max - min) + min // Calculo para gerar um numero aleatorio 
  return Math.floor(valor)
}

let opcao = 0

while (opcao != 1) {
  opcao = numerosAletorios(1,10) //-> Vai passar um numero aleatorio de 1 a 10 para a let opção
  console.log(`O resultado é ${opcao}` )
}
