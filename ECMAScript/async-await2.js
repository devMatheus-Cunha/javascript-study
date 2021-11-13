// !!!! IMPORTANTE LEMBRAR QUE POR TRAZ DE UM sync/awaint DEVE POSSUIR UMA PROMISSE,VC VAI FAZER UM AWAINT EM CIMA DE UM FUNÇÃO QUE RETONAR UMA PROMISE 

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, tempo);
  })
}

// esperarPor()
//   .then(esperarPor)
//   .then(esperarPor)


// ! Para explicar melhor como funciona o async/awaint ele faz com que o codigo fique asicrono, foi definido que a função (executar) abaixo tem async/awaint, e ele faz com q execute linha por linha.
function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000)
  })
}

//! aqui por ex, ira executar linhas por linha, primeiro o let que recebe uma função que possui um sitInterval e depois que for executado ira executar as demais, por isso foi possui passar uma funçaõ para o let e depois usar sua resolução nos codigos abaixo.
async function executar() {
  let valor = await retornaValor()

  await esperarPor(1500)
  console.log(`Valor ${valor}`);

  await esperarPor(1500)
  console.log(`Valor ${valor + 1}`);

  await esperarPor(1500)
  console.log(`Valor ${valor + 2}`);

  return valor + 3
}
executar().then(console.log) //  quando eu saio do mundo async, para eu acessar o valor final dele ali eu preciso usar o .then, igugal para eu acessar o valor daquele return foi preciso usar o then aq