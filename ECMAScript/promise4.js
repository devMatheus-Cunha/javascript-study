//! O que esta acontecendo aqui? E um codigo que vai gerar varios numeors aleatorios e que demoram certo tempo para ser printado e quero q so seja mostrado esses valores quando todos forem carregados

//* Está função faz com que gere numeros aleatorios de acordo com o que for passado no paramentro e demore o tempo que for passado para ser printado no console
function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max] 
  }
  return new Promise(resolve => {
   setTimeout(() => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
   }, tempo);
  })
}


//* esta função pega os numeros gerados acima e os tranforme em promisses com isso pode ser usando o .then igual la embaixo
function getVariosNumeros() {
  return Promise.all([ // Promise.all e e usada para que todas as funções passadas ali dentro retorne um promise
    gerarNumeroEntre(1,60,4000),
    gerarNumeroEntre(1,60,1000),
    gerarNumeroEntre(1,60,500),
    gerarNumeroEntre(1,60,3000),
    gerarNumeroEntre(1,60,100),
    gerarNumeroEntre(1,60,1500)
  ])
}

getVariosNumeros().then(numeros => console.log(numeros))