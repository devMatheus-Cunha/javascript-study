// //* Aplicando em objeto
// // const pessoa =  {
// //   nome:'matheus',
// //   idade:19,
// //   enderoço: {
// //     rua:'moura costa',
// //     numero:19
// //   }
// // }

// //* Forma padrão de se armazenar em varias atrivutos de um objeto ou estrutra que possui atributos com valores 
// // const nome = pessoa.nome
// // const idade = pessoa.idade
// //console.log(`ola ${nome} voce tem ${idade} anos ?`) 

// //* Forma simplificada de se armazenar em variaveis atributos de um obejto usando operadores Destructuring
// // const {nome, idade} = pessoa
// // console.log(`ola ${nome} voce tem ${idade} anos ?`)

// //*Eu tambem poço estrair esses atributos e colocar ele em variaves igual a forma padrão abaixo
// // const {nome: n, idade: i} = pessoa //-> aqui eu disse para pegar os atributos nome e idade do objeto pessoa
// // console.log(`ola ${n} voce tem ${i} anos ?`)

// //* Forma de como pegar um atributo que esta em um obbjeto dentro de outro
// // const {enderoço:{rua,numero}}=pessoa;
// // console.log(`sua rua e ${rua} e o numero e ${numero}`)


// //* Aplicando em array

// // Assim seria usando 
// const [a,b,c,d,e,f,g,h,j] = [10,9,8,7,6,5,4,3,2,1] //-> Aqui eu deifini variaveis e seus valores em array sendo a -> 10 b-> 9 e assim vai 
// console.log(a)// -> assim seria a forma de escolher sua variavel e o valor 

// //Eu tambem posso fazer assim, aplicando uma variavel para todos os valores 
// const valores = [10,9,8,7,6,5,4,3,2,1] 
// console.log(valores[5]) //-> assim seria a forma de selecionar um element, dentro dos [] eu passo o indice dos valor que quero pegar dentro do array sendo entao o numero 5

//* Aplicando em function

function rend ({min = 0, max = 100}){ // -> passei valores padrões de min e max que são parametros dentro de um abjeeto usando Destructuing
  const valor = Math.random() * (max - min) + min // aqui dpassar Math.random que traz um resultado ramdomico, e fiz um calculo para ter uma dispersão entre os valores 
  return Math.floor(valor) // passei a constante com a MathFloor para arrendondar para baixo o valor Ramdom 
}

console.log(rend({max: 100, min: 1})) //-> retornei a função rend no console logo passando os paramentro do objeto max e min para retornar um valor entre 100 e 1
//ou 
console.log(rend({min:95})) //-> o valor maximo por padrão e 100
console.log(rend({}))//-> vai ser de 0 a 100 devido aos valores padrões

//*  Como poderia ser feito sem suar o Operador 

// function rend (min = 0,max = 100){ 
//   const valor = Math.random() * (max - min) + min 
//   return Math.floor(valor) 
// }

// console.log(rend())
