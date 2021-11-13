//! Recurso do ES8
//! Objetivo de simplificar o uso de promisse 

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

//! A função await so vai funcinar dentro de uma função que estiver marcada com async
let obterAlunos = async () => {
  const ta = await getTurma('A')
  const tb = await getTurma('B')
  const tc = await getTurma('C')
  return [].concat(ta, tb, tc)
} //* retorna um objeto AsyncFunction

obterAlunos()
  .then(turmas => turmas.map(alunos => alunos.nome)) //peguei as turmas e mapeei os nomes dos alunos 
  .then(nome => console.log(nome))// estou retornando os nomes dos alunos