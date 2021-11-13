// ! Dando dois exemplos iguais usando For e While para ver a diferença 

//* Usando o For para um valor determinado de repetiçao

for (let i = 1; i <= 10; i++){ // Aqui são os mesmos valor e atributos ditos abaixo,de uma forma mais simples e pratica
  console.log(`O valor de i é ${i}`)
}

//* Usando o While para um valor determinado de repetiçao
let contador = 1 // valor da variavel
while (contador <= 10) { // sua condição
  console.log('O valor de contador é ' + contador)
  contador++ // acresentar uma unidade no valor final, e com isso a condição passe a ser falsa e termine o laço
}

//?--------------------

//! Um exemplo para percorrer todo o Array e imprimir seus valors 

const notas = [1,2,3,4,5,6,7,8]
for (let i = 0; i < notas.length; i++){ // a tag .length server para você contar o tamanho do array, ou tambem percorrer todo o array, ou seja nesse codigo fala para imprimir todos os valores do array e vai adicionar um valor no final e com isso passando a ser falso
  console.log(`As notas são ${notas[i]}`)
}


