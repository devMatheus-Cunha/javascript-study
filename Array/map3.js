//como funciona um map por dentro e como aplicalo manualmente
Array.prototype.map2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i],i,this))
  }
  return newArray 
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.4 }',
  '{ "nome": "Caderno", "preco":13.90 }',
  '{ "nome": "Lapís", "preco": 41.330 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const transJson = json => JSON.parse(json)
const pegarPreco = e => e.preco

let resultado = carrinho.map2(transJson).map2(pegarPreco)
console.log(resultado)