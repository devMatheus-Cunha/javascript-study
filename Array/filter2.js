//! Implementando e mostrando com o filter por dentro

Array.prototype.filter2 = function(callback){
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i],i,this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [{
  nome: 'notebook',
  preco: 2500,
  fragil: true
}, {
  nome: 'ipad pro',
  preco: '4199',
  fragil: true
}, {
  nome: 'copo de vidro',
  preco: 12.49,
  fragil: true
}, {
  nome: 'copo de plastico',
  preco: 18.99,
  fragil: false
}]

const resultado = produtos.filter2(produto => produto.preco >= 500).filter2(produto => produto.fragil == true)
console.log(resultado)