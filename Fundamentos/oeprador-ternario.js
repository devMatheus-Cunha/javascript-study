//* Função Arrow com retorno implicito por isso nao e preciso declarar o Return igual o exemplo abaixo
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
             //Parametro //Primeira condição // Segunda e Terceira condição e se for True ou False vai retonar o valor
console.log(resultado(8))

//* Usando o corpo da função tambem e tendo que declarar o return (Função Arrow)
const resultado2 = nota => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado'
  }
console.log(resultado2(4.3))

//? -----------------------------

//* Esta seria a forma com função normal
const resultado3 = function (nota){ 
  nota >= 7 ? console.log('Aprovado') :  console.log('Reprovado') //! E preciso usar o console.log nas condições true e false pois esta função nao tem o retorno implicito igual usado na função arrow acima
}
resultado3(5.8)

//* Ou pode usar desta forma declarando o return
const resultado4 = function (nota){ 
 return nota >= 7 ? 'Aprovado' :  'Reprovado'
}
console.log(resultado4(9.8))

//? -----------------------------