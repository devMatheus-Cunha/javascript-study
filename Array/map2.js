const carrinho = [
  '{ "nome": "Borracha", "preco": 3.4 }',
  '{ "nome": "Caderno", "preco":13.90 }',
  '{ "nome": "Lapís", "preco": 41.330 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const transJson = json => JSON.parse(json)
const pegarPreco = e => e.preco

let resultado = carrinho.map(transJson).map(pegarPreco)
console.log(resultado)