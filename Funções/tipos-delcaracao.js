//*function declaration
//? este tipo de função pode ser declarada antes ou depois da função em si, pois o js interpreta primeiro todas as funções do codigo
console.log(soma(3,5))
function soma(x,y) {
  return x + y
}
//? ou assim, tanto faz a forma 
console.log(soma(3,5))

//!-----------------

//function expression
//? função declarada anonima declarada a uma variavel, e como ele e adicoanda a uma variavel sua declaração sempre tem q q ser apos o codigo, e nao igual a funçaõ acima 
const sub =  function(x,y) {
  return x - y
}
console.log(sub(10,5))

//!-----------------

//named function expression
//? função atribuida a uma const e q tambem possui nome, mas possui uma vantagem q e aparecer seu nome na hora de debugar, mas nao e muito utilizada e possui a mesma logica de so pode ser chamada apos o codigo 
const sub =  function sub(x,y) {
  return x - y
}
console.log(sub(10,5))