//! operador ... - rest(juntar) | spread(espalhar)
//! usar rest com parâmetro de função 
const [l, e, ...tras] = "coder" // aqui ela esta passando varios parametros juntos 
console.log(l, e, tras)

//* usar spread com objeto 
const funcionarios = { nome:'Matheus', salario: 1256.99}
const clone = {ativo: true, ...funcionarios} // aqui eu estou pegando todos atributos de funcionarios e espalhando dentro de outro objeto que nesse caso e clone 
console.log(clone)

//* usar spread com array
const grupoA = ['teu','thuzin','tide']
const grupoB = ['fulando', ...grupoA, 'sigrano'] // mesma logica do de cima
console.log(grupoB);


