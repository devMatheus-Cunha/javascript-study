//! Irei mapear uma const e retornar em um novo array multiplicando seus valores 
const nums = [1,2,3,4,5]
let resultado = nums.map(e => e * 2) // o 'e' neste caso pega os elementos do array num 
console.log(resultado)

//! Mostrando um outra forma onde eu posso passar varios maps por se um array 
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// ele pegou o array nums e em cada elemento ele somou com 10 depois triplicou e por ultimou colocou para dinheiro isso tudo em cada elemento e depois criou apenas um array com o resultado e não criou um array para cada função separadamente. 

//          array 1 + array2 *  array3 'trasnforma' array4  e por ultimo ele envia para  resultado os o array novo
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)