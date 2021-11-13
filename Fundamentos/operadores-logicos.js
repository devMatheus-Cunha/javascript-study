// ! Usando && todos da condição tem que ser veradeiro, se possuir um falso tudo e falso
// ?Ex:
//* v && v -> v
//* v && f -> f
//* f && v -> f
//* f && f -> f

// ! Usando || signfica um ou outro, ou seja uma das condições precisa ser verdadeira 
// ?Ex:
//* v || v -> v
//* v || f -> v
//* f || v -> v
//* f || f -> f

// ! Usando !!(x ^ y) -> isso e um OU EXCLUSIVO,  significa que os dois tem q ser igualmentes diferentes, ou seja 
// ?Ex:
//* !!(v ^ v) -> f
//* !!(v ^ f) -> v
//* !!(f ^ v) -> v
//* !!(v ^ v) -> f

// ! Usando ! e negação logica, segue os exemplos
// ?Ex:
//* !v -> f = Negação logica de verdadeiro e falso
//* !f -> v = Negação logica de falso e verdadeiro

// ! Exemplos na pratica usando eles da aula 

function comprar(trabalho1, trabalho2) {
  const comprarTv50 = trabalho1 && trabalho2
  const comprarTv32 = trabalho1 != trabalho2 //!-> nesse caso usou o diferente que da o mesmo sentido do ou exclusivo
  const tomarSorvete = trabalho1 || trabalho2
  const manterSaudavel = !tomarSorvete

  return {
    comprarTv50,
    comprarTv32,
    tomarSorvete,
    manterSaudavel
  } //!-> Aqui e um declação de objeto simplificada, no lugara de criar um atributo e adicionar o valor dele uma variavel pode se declarar apenas o nome da variavel que automaticamente criar um nome do atributo
}

// console.log(comprar(true,true))
// console.log(comprar(false,true))
// console.log(comprar(true,false))
// console.log(comprar(false,false))


//! Usando a ideia do exemplo mas udando if e else


function compras(trabalho1, trabalho2) {
  if (trabalho1 && trabalho2 ) {
    console.log('vamos comprar a tv de 50 polegadas e tomar sorvete')
  } else if (trabalho1 != trabalho2 ) {
    console.log('Vamos comprar uma tv de 32 polegadas e tomar sorvete ')
  } else {
    console.log('vai ficar saudavel')
  }
}
compras(false, true)