function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'not',
  preco: 5000,
  desc: 0.15,
  getPreco // ou funcao:getPreco
}
//console.log(getPreco()) //* da NaN pois o this dessa ocasiao e o this global e não do objeto que queria que fosse 
console.log(produto.getPreco())

//? ---------------

//! Forma usando o call para executar a função no objeto 

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro ={
  preco:1000,
  desc:0.3
}
console.log(getPreco.call(carro))// Aqui eu estou executando a funcao getPreco no objeto carro, por isso o this funciona normalment 
console.log(getPreco.call(carro, 10,'$')) //Para passar paramentro para a função chamada e assim, vc passa onde vc quer executar a função e depois , e os parametros 


//! Forma usando o apply para executar a função no objeto 
function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro2 ={
  preco:30000,
  desc:0.50
}
console.log(getPreco.apply(carro2))// Aqui eu estou executando a funcao getPreco no objeto carro, por isso o this funciona normalment 
console.log(getPreco.apply(carro,[10,'$'])) //Para passar paramentro para a função chamada e assim, vc passa onde vc quer executar a função e depois , e os parametros 


//? TESTE

function imprimirNome() {
  console.log(`Meu nome é ${this.nome}`)
}

const criarPessoa = {
  nome:'Metheus'
}

imprimirNome.apply(criarPessoa)


