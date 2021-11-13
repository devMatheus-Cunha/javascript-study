//* este e um exemplo onde posso criar uma funçaõ e passar ele para um array objeto ou qualquer outro fato 

const nomes1 = {
  nome: 'matheus',
  idade: 20
}

const nomes2 = {
  nome: 'mathedasdus',
  idade: 20241
}

function darNomes(names) {
  console.log(`ola ${names.nome} e verdade que vc tem ${names.idade} anos?`)
}

// EXEMPLO 2 e simples 

// function imprimirSoma (a,b){
//   console.log( a + b)
// }

// imprimirSoma(1,5)
////  -----------------------------------------

// * ARMAZENANDO UMA FUNÇÃO A UMA VARIAVEL 

// este exemplo  e igual o de cima mas aplicando a função a um cons ou variavel em si, dessa forma te da um poder maior de manipulação 
// const imprimirSoma =  function (a, b){
//   console.log(a + b)
// }

// imprimirSoma(2, 6)

// * ARMAZENANDO UMA FUNÇÃO ARROW A UMA VARIAVEL 

// const soma = (a,b) => {
//   console.log(a * b)
// }

// soma(4,3)

//* UMA MANEIRA A MAIS DE DIMINUIR A SINTEX USANDO UM RECUSRO DO ARROW FUNCTION CHAMADO DE RETORNO IMPLICITO

// const sub = (a,b) => a - b

// console.log(sub(10,5))

//*UMA FUNÇÃO ARROW QUE RETORNA UM VALOR SEM SER UM RETORNO IMPLICTO SERIA DESTA FORMA 

// const sub = (a,b) => {
//   return (a - b)
// }

// console.log(sub(10,5))

////---------------

// testes 

// document.getElementById("alert").addEventListener("click", function(){
//   alert('ola')
// } );

const imprimirAlert = document.getElementById("alert")

imprimirAlert.addEventListener("click", () => alert('ola mundo'))