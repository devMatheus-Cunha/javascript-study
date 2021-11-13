//* um array e um objeto 
console.log(typeof new Array, [])

//* uma forma de criar array mas não tão recomendada
let aprovados = new Array("matheus", "lucas", "bia")
console.log(aprovados)

//* forma mais recomendada para criar array | forma literal
let reprovados = ['afonso', 'pedro', 'jose']
console.log(reprovados)
console.log(reprovados[0])
console.log(reprovados[1])
console.log(reprovados[2])
console.log(reprovados[3])

reprovados[3] = 'paulo' //aqui vc ta adicionando um elemento ao indice 3 || e mais usado para alterar um elemento de um indice
reprovados.push('fagner') // adicionar um elemento no final do array 
console.log(reprovados)

console.log(reprovados.length) // para falar o tamanho do array 

reprovados.sort() // ele retonar o mesmo array em ordem, nesse caso em ordem alfabetica || ou em numero em ordem crescente
console.log(reprovados)

delete reprovados[1] // estou deletando o elemento do indice 1, e ele nao vai deletar e ordenar o array, ele vai deletar e o valor vai ficar como undefined
console.log(reprovados)


pessoas = ['matheus', 'lucas', 'maria'] // aqui estou sobrescrevendo o array criado 
pessoas.splice(1, 1) // assim eu falo q apartir do indice 1 eu apague um elemento, ou seja ele mesmo
console.log(pessoas)

pessoas.splice(1, 2) // aqui eu falo q apartir do indice 1 apague dois elementos, ou seja o indice 1 e o indice 2
console.log(pessoas)

pessoas.splice(1, 2, 'elemento1','elemento2') // apartir do indicec 1 ele vai apagar dois elementos e vai adiconar esses dois elementos 
console.log(pessoas)

pessoas.splice(1, 0, 'elemento1','elemento2') // aq apartir do indice 1 adicione esses dois elementos, e não apague nada  
console.log(pessoas)