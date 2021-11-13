//! Sem usar promise 
// const http = require('http')

// const getTurma = (letra, callback) => {
//   const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
//   http.get(url, res => {
//     let resultado = ''

//     res.on('data', dados => {
//       resultado += dados
//     })

//     res.on('end', () => {
//       callback(JSON.parse(resultado))
//     })
//   })
// }

// let nomes = []

// getTurma('A', alunos => {
//   nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//   getTurma('B', alunos => {
//     nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//   })
//   getTurma('C', alunos => {
//     nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//     console.log(nomes);
//   })
// })


//! Usando Promise

const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((response, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
        try {
          response(JSON.parse(resultado))
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}
let nomes = []
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => nomes.concat(...turmas)) // ...turmas espalha todos os valores das turmas em um [] só
  .then(alunos=>alunos.map(aluno=>aluno.nome))// mapea todos os nomes dos alunos dentro das turmas 
  .then(nomes => console.log(nomes))// retornar todos os nomes dos alunos dentro das tunrmas
  .catch(e=>console.log(e))// tratamento de um possivel erro 