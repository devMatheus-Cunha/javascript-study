console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//! Aqui eu criei uma String recebendo um função de reverse, ja que o o String.protype não possui esse method diretamente.
String.prototype.reverter = function(){
  return this.split('').reverse().join('') // aqui o split separa todas letras, o reverse reverter todas ordem e join para juntar todas letras novamente 
}
console.log('Ola matheus'.reverter())//Aqui eu declaro o nome da string e chamando a função  criada, e com isso ela vai passar a string para cima, abaixo vai ter um exemplo iguala cima para entender melhor como  seria de forma comum

// ! este exemplo e so para mostrar o codigo acima de uma forma mais entendivel
let frase = 'ola meu querido'
function reverter1 (){
  return frase.split('').reverse().join('') // aqui da pra perceber facilmente que ele ta pegando um let que possui a string, eu poderia passar essa string por paramentro da função tbm 
}
console.log(reverter1())

// ?--------------------------

//! Aqui criei um array como a função para pegar o primeiro elemento ja que não possui esse method diretamente 
Array.prototype.first = function(){
  return this[0]
}
console.log([0,1,2,3,4,5,6].first())