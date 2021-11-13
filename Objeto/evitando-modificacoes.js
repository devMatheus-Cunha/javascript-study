//! Como restrigir um pouco a alta flexibilidade do Js de modificações e mudanças em seu objeto 

//? Object.preventExtensions serve pra privar de adiconar novos atributos e valores no Objeto
const produto = Object.preventExtensions({
  nome: 'Cadeira',
  preco: 50,
  tag: 546
})
console.log('É extensivel:', Object.isExtensible(produto)) // verificando se ele e extensivel/pode add novos atributos

produto.nome = 'Mesa' // consigo alterar o valor do atributo 
produto.descricao = 'Mesa redonda' // não consigo add novos atributos e valores
delete produto.tag // consigo excluir atributos criados
console.log(produto)

//*------------------------------------

//? Object.seal eu não consigo apagara e nem adiconar novos atributos mas eu consigo alterar os valores dos atributos criados

const pessoa = {
  nome: 'Matheus',
  idade: 19
}
Object.seal(pessoa)
console.log('Esta selado:', Object.isSealed(pessoa)) // verificando se ele esta selado ou não

pessoa.peso = 70
delete pessoa.idade
pessoa.nome = 'Lucas'
console.log(pessoa)

//*------------------------------------

//? Object.freeze ele e a mistura dos dois acima vc nao consegue nem deletar, adicionar ou allterar seus valores 
const carro = {
  nome:'Ferrari',
  preco:1818
}
Object.freeze(carro)
console.log('Esta congelado:', Object.isFrozen(carro)) // verificando se ele esta totalmente cogeladp

carro.peso = 70
delete carro.nome
carro.nome = 'Lucas'
console.log(carro)


