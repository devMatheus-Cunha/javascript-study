const calculo = function (x, y) {
  return new Promise((resolve) => {
    calc = x + y
    resolve(calc)
  })
}
calculo(2, 3).then(valor => console.log(valor))

//?--------

const lista = () => {
  return new Promise((resolve) => resolve(['matheus', 'lucas', 'pedro']))
}
lista()
  .then(pessoas => pessoas.forEach(nome => console.log(nome)))

//! e possivel usar varios then para aplicar em cada um um função e tratamento do resultado que vc deseja 
lista()
  .then(pessoas => pessoas)
  .then(nome => nome[0])
  .then(pessoa1 => pessoa1.toUpperCase())
  .then(pessoa => console.log(pessoa))

//?--------

//! Tambem consigo criar uma função esterna e passar ela no then 
const pessoa = (nome) => {
  return new Promise((response) => {
    response(nome)
  })
}

const nomePequeno = nome => nome.toLowerCase()

pessoa('JOSE')
  .then(nomePequeno)
  .then(console.log) // posso tambem apenas retonar console.log pois o then vai passando apenas um parametro um para o outro e log entende q seu parametro o valor do then anterior