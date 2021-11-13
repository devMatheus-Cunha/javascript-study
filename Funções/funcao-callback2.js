const notas = [4,2,8,9,5,7]

//* Sem callback
const notasBaixas1 = []
for (let i in notas){  // aqui eu pego todos os indices do array notas
  if(notas[i] < 7){
    notasBaixas1.push(notas[i]) // se os valores dos indices do array notas forem menor q 7 adicione ele ao array notasBaixas1 - push e para adiconar no final doa rray
  }
}
console.log(notasBaixas1)

//?--------

//!Usando Callback, ou seja ele vai passar a função para cada elemento do array, se o resultado for true ele adicona no array se não ele nao adicona      

const notasBaixas2 = notas.filter(function(nota) { //*Filter e um função que vai filtrar os elementos de um array em cima de uma deternminada função passada
  return nota < 7
})
console.log(notasBaixas2)
//* o filter filtrou usando a função callback o valores menores que 7 dentro do array notas e passsou esses valores para um novo array que recebe a const notasBaixas2. E como se fosse um sub array do array original notas

//?--------

//! Podemos deixar mais clean ainda usando função arrow implicita 

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//! Padrão com arrow seria assim 

const notasBaixas4 = notas.filter((nota) => {return nota < 7})
console.log(notasBaixas4)

//?--------

//! Podemos criar uma função separada caso queira usar dps novamente 

const funcNotas = function(nota) {return nota < 7}
const notasBaixas5 = notas.filter(funcNotas)
console.log(notasBaixas5)