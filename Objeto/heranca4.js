function Aula(nome, videoId) {
  this.nome = nome
  this.videoId = videoId
}
const aula1 = new Aula('bem vindo', 123) //  Usando o New eu instacio a função acima criando um Objeto, por isso seu resultado e igual um obj recebendo atributos e valores e tambem o this aponta para Aula pois ela passa ser o nome do Objeto || Tambem faz com que o .protorype aponte para função Aula.
console.log(aula1)

//! Simulando o new acima || o codigo abaixo e o que o New faz v

function novo(f, ...params) {
  const obj = {} // por eu não usar o new preciso usar a notação literal de objeto
  obj.__proto__ = f.prototype // aqui eu estou fazendo que objeto criado agora aponte para a funcao ||f vai receber a funcao Aula
  f.apply(obj, params) // estou executando a funcão f que recebe como parametro obj para com que o this da funcao aponte para obj
  return obj
}
const aula2 = novo(Aula, 'Bem vindo',456)
console.log(aula2)