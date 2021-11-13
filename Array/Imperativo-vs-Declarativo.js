const alunos = [{
    nome: 'João',
    nota: 7.9
  },
  {
    nome: 'Maria',
    nota: 9.2
  }
]
//* Imperativo 
let total1 = 0
for(let i = 0; i < alunos.length; i++){
  total1 += alunos[i].nota
}
console.log(total1 / alunos.length )

//* Declarativa
const getNota = aluno => aluno.nota // para receber as notas do aluno passando por um map
const soma = (total,atual) => total + atual // para passasr a soma no reduce, ala vai fazer a soma e agrega os valores 
total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//? O lado bom de usar a declarativa e que fica mais facil de se usar novamente algum codigo como usei aqui para fazer outro tipo de ação
const notasAltas = alunos.map(getNota).filter( aluno => aluno > 9)
console.log(notasAltas)