//* Estrateegia 1 para gerar um valor padrão
function soma1(a,b,c) {
  a = a || 1 
  b = b || 1 // nas 3 opções basicamente quer dizer q se o valor de a,b,c for falso ou seja, Null,Undufined ou ate mesmo o 0 o valor padrão e 1
  c = c || 1
  return a + b + c
}

console.log(soma1()) // resultado e 3 pois eles usaram o valor padrão 1 
console.log(soma1(3))// o resutaldo e 5 pois passou o valor apenas de do primeiro parametro e usou o valor padrão nas outras
console.log(soma1(1,2,3))// o resultado e 6 pois fez a soma normalmente dos 3 valors 
console.log(soma1(0,0,0))//  o resultaado e 3 pois o 0 e considero um booleano falso então ele pegou o valoor padrão q e 1

//?---------

//* Estrategia 2, 3 e 4 para gerar valos padrão
 
function soma2(a,b,c) {
    a = a !== undefined ? a : 1 // caso a seja diferente de undefined o valor será a, mas se for igual o valor passa a ser 1
    b = 1 in arguments ? b : 1 // b tem o indice 1 por isso esta ali no incio - dentro de arguments existe o indice 1 ? se sim pegar o valor de b se não o valor padrão 1
    c = isNaN(c) ? 1 : c //  se a variavel c não possui um numero retorna o valor padrão 1 caso possua retorne o valor de c
}

console.log(soma1()) 
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))//  o resultaado agpra e 0  devido a restrição feita

//?--------

//* Forma do Es6 e a mais usada 

function soma3(a = 1, b = 1, c = 1) {// no proprio paramentro vc consegue definir o valor padrão dos paramentros 
  return a + b + c
}

console.log(soma1()) 
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))//  o resultaado agpra e 0  devido a declaração do valor padrão nas variaveis 
