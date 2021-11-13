// function maiorOuIgual(a,b) {
//   return a >= b && typeof a != typeof b ? false : true
// }

// console.log(maiorOuIgual(0, 0)) 
// console.log(maiorOuIgual(0, "0"))
// console.log(maiorOuIgual(5, 1))

function verificar(a,b) {
  if (a >= b && typeof a != typeof b ) {
    return false
  } else {
    return true
  }
}
console.log(verificar(0, 0)) 
console.log(verificar(0, "0"))
console.log(verificar(5, 1))
