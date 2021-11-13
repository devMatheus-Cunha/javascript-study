const escola = [{
  nome: 'Turma1',
  alunos: [{
    nome: 'Matheus',
    nota: 8.1
  }, {
    nome: 'Pedro',
    nota: 9.3
  }]
}, {
  nome: 'Turma2',
  alunos: [{
    nome: 'Jose',
    nota: 8.9
  }, {
    nome: 'Robson',
    nota: 7.3
  }]
}]
const getDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//!Aqui vamos usar um estrategia para concatenar e ter todas notas dentro de apenas um array e não dois arrays dentro de uma array 

Array.prototype.flatMap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
const mediaAlta = notas2.filter(nota => nota > 8)
console.log(mediaAlta)