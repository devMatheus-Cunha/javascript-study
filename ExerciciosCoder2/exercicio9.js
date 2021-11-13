//! aqui e um codigo que faz uma repetição, esta basicamente falando quantas vezes ira repetir o elemento passado
function repetir(item, quantidade) {
  return Array(quantidade).fill(item)
}
console.log(repetir('oi', 6))

function simboloMais(quantidade) {
  return "+".repeat(quantidade)
}
console.log(simboloMais(10))


function simboloMais(quantidade) {
  return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(10))