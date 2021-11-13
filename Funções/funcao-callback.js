const fabricantes = ['Fiat','BMW','Renault']

function imprimir(nome,indice) {
  console.log(`${indice + 1}. ${nome}`) // indice +1 e para começar a mostrar o indice do valor 1 e nome para imprimir os nomes
}

// Dentro do array vc tem essa função  forEach
fabricantes.forEach(imprimir) //! vc diz que para cade elemento do array ele execute a função imprimir, ou seja seja ele vai chamar de volta a função imprmir para todos os elementos do array, por isso o Callback

fabricantes.forEach((marcas,) => {
  console.log(marcas) //! ele vai imprimir todos os elementos do array, ou seja os fabricantes escritos
})

