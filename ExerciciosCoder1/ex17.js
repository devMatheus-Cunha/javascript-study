function cardapio(codigo, quantidade) {
  let valor = 0

  switch (codigo) {
    case 100:
      valor = `Valor da conta é R$${quantidade * 3}`
      return valor.replace('.', ',')
    case 200:
      valor = `Valor da conta é R$${quantidade * 4}`
      return valor.replace('.', ',')
    case 300:
      valor = `Valor da conta é R$${quantidade * 5.5}`
      return valor.replace('.', ',')
    case 400:
      valor = `Valor da conta é R$${quantidade * 7.5}`
      return valor.replace('.', ',')
    case 500:
      valor = `Valor da conta é R$${quantidade * 3.50}`
      return valor.replace('.', ',')
    case 600:
      valor = `Valor da conta é R$${quantidade * 2.80}`
      return valor.replace('.', ',')
    default:
      return 'Produto não existe'
  }
}
console.log(cardapio(100, 3))
console.log(cardapio(200, 3))
console.log(cardapio(300, 3))
console.log(cardapio(400, 3))
console.log(cardapio(500, 3))
console.log(cardapio(600, 5))