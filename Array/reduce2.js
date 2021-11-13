const alunos = [{
    nome: 'joao',
    nota: 7.3,
    bolsista: false
  },
  {
    nome: 'maria',
    nota: 9.2,
    bolsista: true
  },
  {
    nome: 'pedro',
    nota: 9.8,
    bolsista: false
  },
  {
    nome: 'ana',
    nota: 8.7,
    bolsista: true
  }
]



//! Na verificação dos dois desafios tem um auto verificação se e true ou false 
//? Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce((valorInicial, atual) => {
  console.log(valorInicial, atual)
  return valorInicial && atual // se todos forem true vai retonar true
})
console.log(todosBolsistas)

//? Desafio 1: A Algum bolsistas?
const algumBolsista = alunos.map(a => a.bolsista).reduce((valorInicial, atual) => {
  console.log(valorInicial, atual)
  return valorInicial || atual // se tiver algum true vai retonar verdadeiro 
})
console.log(algumBolsista)