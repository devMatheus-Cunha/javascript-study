//! O filter serve para filtar um array, por ex vc tem um array com notas e quer apenas notas acima de 7 retorne o valores acima de 7 do array filtrado 

const produtos = [{
  nome: 'notebook',
  preco: 2500,
  fragil: true
}, {
  nome: 'ipad pro',
  preco: '4199',
  fragil: true
}, {
  nome: 'copo de vidro',
  preco: 12.49,
  fragil: true
}, {
  nome: 'copo de plastico',
  preco: 18.99,
  fragil: false
}]

// o conceito aqui e tipo o map ele filtrou o array produtos, filtrou os precos acima de 500 os q sao acima de 500 passsou para a segunda filtragem e se o produto e maior q 500 e tbm fragil vai retonar na const resultado
const resultado = produtos.filter(produto => produto.preco >= 500).filter(produto => produto.fragil == true)
console.log(resultado)

//! Teste meu 
//? como o filter trabalha com true e false basicamente vai retonar os valores que são verdadeira nesse caso. basicamente e se numero % 2 for igual a 0 vai retornar os que são igual a 0 ou seja os pares, caso fosse 1 ia retornar os impares
const numeros = [1,2,3,4,5,6,7,8,9]
const numerosPares = numeros.filter(numero => numero % 2 == 0) 
console.log(numerosPares)