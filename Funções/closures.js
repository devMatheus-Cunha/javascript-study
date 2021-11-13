// * closure é o escopo criado quando uma função é declarada, é criando um escopo onde ela foi declarada.
//* é esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'Global'
const fora =  function() {
  const x = 'Local'
  function dentro() {
    return x
  }
  console.log(dentro())
}

fora()

//! Ele vai retonar 'Local' pq o local fisico onde a funcão fora foi declarada possui ja possui uma const x e ela vai levar em consideração o contexto onde examante a funcao foi declarada 
