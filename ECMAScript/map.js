//! E um tipo de criação como se fosse um objeto, tendo chaves e valores
const tecnologias = new Map()
tecnologias.set('react', {
  framework: false
})
tecnologias.set('angular', {
  framework: true
})

console.log(tecnologias.react); // Não acessa desta forma igual um objeto

//* desta forma que e pego
console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

//* criando um map atribuindo chaves e valores || sua vantagem que vc pode passar uma função, objeto e mais como uma chave ja no objeto normal não e possivel

const chavesVariadas = new Map([
  [function () {}, 'função'],
  [{}, 'Objeto'],
  [123, 'Numeros']
])

chavesVariadas.forEach((valor, chave) => {
  console.log(`${valor} sua chave é: ${chave}`)
})

console.log(chavesVariadas.has(123)); // ? o has verifica se possui alguma chave com esse valor passado dentro do map
chavesVariadas.delete(123) // ? para deletar uma chave
console.log(chavesVariadas.has(123)); 
console.log(chavesVariadas.size); // ? para dizier quantos elementos possui dentro do map

