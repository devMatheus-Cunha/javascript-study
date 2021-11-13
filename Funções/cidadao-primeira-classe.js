//! criar de forma literal
function func1(a, b) {
  return a + b
}
console.log(func1(3, 4))

// * Observação que quando a função e armazenada em algum lugar com variavel, array e mais, ela deve ser passada como função anonima

//! armazenar em uma variavel
const func2 = function (a, b) {
  return a + b
}
console.log(func2(22, 3))

//! armazenar em um array - Tanto criar uma diretamente quanto declarar uma função ja criada
const array = [function (a, b) {
  return a + b
}, func2, func1]
console.log(array[0](2, 3))

//! armazenar em um atributo de um objeto ja criado ou criado dinamincamente 
const obj = {}
obj.falar = function () {
  return 'falar'
}
console.log(obj.falar())

//?------

// !Como passar uma função como paramentro de outra função
// Ele ira passar mais exemplos na frente sobre como usar isso e como pode ser muito util
function run(fun) { 
  fun() // aqui e onde ela esta sendo declarada para pode rodar 
}
run(function () {console.log('Executando a função acima')}) //aq e o parametro da função acima 

//* Para ficar mais claro o uso dela, e como se eu estivesse fazendo assim 

// function run() {
//   console.log('ola mundo')
// }

// run()

//! uma função pode retornar/conter uma função 

function soma(a,b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(3,5)(4)
//Outra opção que pode ser feito
const tresMaisCinco = soma(3,5)
tresMaisCinco(4)