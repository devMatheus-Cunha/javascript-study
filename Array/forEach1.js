const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//! Aqui ele esta aplicar um for no array com isso ele aplica essa função callback em todos os elementos do array
aprovados.forEach(function(nome, indice, array){ // primeiro parametro e o nomes dos elementos, segundo e o indice dos elementos e o terceiro e o array em si || e preciso passar sempre nesta ordem para ter acesso a eles
  console.log(`${indice +1}) ${nome}`)
  console.log(array)
})

// usando um arrow function
aprovados.forEach(nome => console.log(`Nomes:${nome}`)) // vai retornar apenas os nomes do array 

//Aplicando em const a função e depois passando para o forEach
const exibirAprovador = (nomes) => console.log(`Os aprovados ${nomes}`)
aprovados.forEach(exibirAprovador)