// Coleção dinamica de pares chaves/valor 
// const produto = new Object // * new Object e uma forma de vc criar um objeto 
// produto.nome = 'Lapis' // * vc consegue criar dinamicamente atributos e valores do objeto criado acima 
// produto['preco do lapis'] = 2 // * tambem e uma forma de se criar o nome do atributo mas so e util em algumas ocasioes 
// console.log(produto)
// delete produto.nome // * tambem posso delatar os atributos e valores 
// console.log(produto)

//! um exemplo mostrando que posso ter um obejeto com outros objetos dentro dele e array com objetos tambem dentro dele 

const carro = {
  marca: 'Fiat',
  preco: 10000,
  propriaterio: {
    nome: 'Matheus',
    idade: 20,
    endereco: {
      rua: 'Rua moura costa',
      numero: 168
    }
  },
  condutores: [{
    nome: 'Luciano'
  }, {
    nome: 'Fabiana'
  }, {
    nome: 'Matheus'
  }],
  QuantosMotoristasPossui() {
      return `Este carro possui ${condutores.length} condutores`
  }
}

console.log(carro.condutores[0].nome, carro.condutores[1].nome)
console.log(carro.propriaterio.nome, carro.propriaterio.idade)

//! APlicando o operador destructuring 

const {
  marca,
  preco,
  propriaterio,
  condutores
} = carro

console.log(marca, preco, propriaterio.endereco)
console.log(propriaterio.nome, condutores[1].nome)

console.log(carro.QuantosMotoristasPossui())

//! Tambem posso deletar atributos e seus valores igual no ex acima, e se eu deletar um atributo que possui objetos dentro deles ou array com objetos, tudo que esta dentro desse atributo será deletado tambem 