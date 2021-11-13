// Number.prototype.entre = function(incio,fim){ // Esse codigo em si ele vai explicar melhor mais pra frente
//   return this >= incio && this <= fim
// }

// const imprmirResultado = (nota) => {
//   if(nota.entre(9,10)){
//     console.log('Quadro de honra')
//   } else if (nota.entre(7,8.99)){
//     console.log('Foi aprovado')
//   } else if (nota.entre(5,6.99)){
//     console.log('Recuperção')
//   }else if (nota.entre(1,4.99)){
//     console.log('Reprovado')
//   }else{console.log('Valor invalido')}
// }

// imprmirResultado(10)
// imprmirResultado(7)
// imprmirResultado(5)
// imprmirResultado(2)
// imprmirResultado(11)

//! fazendo de outra forma para mim 

const darResultados = (valor) => {
  if (valor >= 9 && valor <= 10) {
    console.log('Quadro de honra')
  } else if (valor >= 7 && valor <= 8.99) {
    console.log('Foi aprovado')
  } else if (valor >= 5 && valor <= 6.99) {
    console.log('Recuperação')
  } else if (valor >= 3 && valor <= 4.99) {
    console.log('Reprovado')
  }else{console.log('Valor invalido')}
}

darResultados(9.33)
darResultados(7)
darResultados(6)
darResultados(4)
darResultados(11)

