// aqui let i não pega de fato os atributos e sim seus indices, mas conseguimos percorrer o array de uma forma mais simples (Mas a outra forma de percorrer o Array melhor que esta que sera passado para frente)
const nota = [6,5,4,7,9] 
for (let i in nota) {  
  console.log(i,nota[i])
}

//Aplciando em objeto que e uma forma mais usada para percorrer seus atributos e valores
// Sendo mais direto aqui, os indices seria os atributos e pessoa[atributos]  vc pega os valores dos atributos 
const pessoa = {
  nome:'Matheus',
  idade: 19,
  peso:69
}
// atributos in pessoa diz basicamente, para percorrer todos os atrbiutos e valores de um obejto ou todos os indices de um array e retornar eles
for (let atributos in pessoa){
  console.log(`${atributos} = ${pessoa[atributos]}`)
}
