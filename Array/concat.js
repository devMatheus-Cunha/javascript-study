//! se usa concat para juntas valores de um array com outros ou vairos arrays || e os arrays originais não são alterados e sim cria um novo array
const filhas = ['debora','leticia']
const filhos = ['arthur','pedro']
const todosFilhos = filhas.concat(filhos)
console.log(todosFilhos)

//*posso tambem passar parametros diretamente ou varios arrays para concatenar 
console.log(['aqui vai juntar com de la'].concat(1,2,3,[4,5,6],'todos',))

