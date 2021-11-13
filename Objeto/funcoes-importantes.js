const pessoa = {
  nome: 'Matheus',
  idade: 10,
  peso: 71
}

//! Todos abaixo vão retonar seus resultados passados dentro de um Array 
console.log(Object.keys(pessoa)) //* ele vai retonar todos os atributos do obj
console.log(Object.values(pessoa)) //* retorna todos os valores dos atributos 
console.log(Object.entries(pessoa)) // * vai retornar um array com sub arrays possuindo chaves e valores do objeto

//? --------------------------------------

//! a partir do forEach eu vou percorrer os elementos deste array e retornalos (vão ser um array pq como dito acima quando se usa o .entries ele retorna as chaves e valores do objeto como um array) 
//! Ponto de observação, este codigo percorre esse objeto pegando seus atributos chaves e valores como um Array
Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}:${e[1]}`)
});

//*Usando o operdor destruting para retirar atributo e valor e colocalos em variaveis
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}:${valor}`)
});

//? --------------------------------------

//! Como definiar um propriedade de uma forma que vc pode fazer configurções nele, como se ele pode ser alterada ou não ou se ela sera impressa quando objeto for isntaciado
//                   Objeto  ||   Atributo
Object.defineProperty(pessoa, 'minhapropriedade', {
  enumerable: true, //* se ela vai estar listada/visivel no objeto 
  writable: false, //* se ela vai poder ser alterada
  value: 10 //* seu valor
})

pessoa.minhapropriedade = 19 //* para mostrar que ela nao pode ser alterada
console.log(pessoa.minhapropriedade)
console.log(Object.keys(pessoa)) //*  para mostrar que ele listou esse atributo se eu colocar false no enumerable ele nao aparecera aq 

//? --------------------------------------

//! aqui iremos mostrar um method de Objeto novo que foi atribuido no ES6 que ele define um objeto de destino e pega todos os valores e atributos dos outros objetos e adiciona nele 
const dest = {a:1}
const ob1 = {b:2}
const ob2 = {c:3,a:4} //* ele vai levar em consideração o ultimo valor e atributo escrito então nesse caso o valor de (a) sera 4 pois foi o ultimo definido

const obj = Object.assign(dest,ob1,ob2) //* primeiro obj definido e no qual vai os valores e atributos dos outros
console.log(obj)
