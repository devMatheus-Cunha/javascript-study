//*Fectory simples 
//! Pode possuir valores fixos ou pode passar paramentro que podem ser alterados e manipulados de forma mais simples, como vc ta criando um objeto atraves da notação {} ele automaticamente ja esta instacinado esse obj
//! E sempre que eu executar essa funcao ele vai criar uma nova instacia desse obj e com isso nao precisando usar new Criarprod

// const Criarprod = function () {
//   return {
//     nome:'cel',
//     preco: 213
//   }
// }

// console.log(Criarprod())

//?-----

//* criando uma função fectory que e manipulavel atraves dos seus paramentros 

const criandoProd = function(nome,preco, desconto = 10) {
  return {
    //como o valor do atributo e a msm coisa q o atributo em si pode se declarar assim 
    nome, // ou nome:nome
    preco,// ou preco:preco
    desconto// ou desconto:desconto
  }
}
console.log(criandoProd('cel',1843,50))
console.log(criandoProd('not',3843))

