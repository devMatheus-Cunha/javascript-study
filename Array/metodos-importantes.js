const pilotos = ['Vettel', 'Alonso', 'Raikkones', 'Massa']

//! deleta o ultimo elemento do array
pilotos.pop() 
console.log(pilotos)

//! adiciona um elemento ao final do array 
pilotos.push('Verstappen') 
console.log(pilotos)

//! deleta o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

 //! adiciona ao primeiro elemento do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//! Splice pode adicionar e remover elementos ou os dois juntos
//* Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // estou adiconando esses dois valores a partir do indice 2 ou seja antes do atual indice 2 pois os dois elementos adiconados será o novo indice 2
console.log(pilotos)

//* Remover
pilotos.splice(3, 1) // a partir do indice 3 irei deletar um elemento ou seja o priprio indice 3 
console.log(pilotos)

//* Remover e adiconar 
pilotos.splice(0, 1, 'Massa') // a partir do indice 0 vou deletar um elemento ou seja ele mesmo e adiconar um novo 
console.log(pilotos)

//! Este metodo retorna um novo Array 
const algunsPilotos1 = pilotos.slice(2) // vai retornar nesse novo array os elementos a partir do indice 2 contado com ele
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai retornar os elementos do indice 1 ate o 4 mas o valor indice quatro não conta, e como se fosse retonar do indice 1 ate o 3
console.log(algunsPilotos2)

//!Para retornar um Array em ordem 
pilotos.sort() // ele retonar o mesmo array em ordem, nesse caso em ordem alfabetica || ou numero em ordem crescente
console.log(pilotos)