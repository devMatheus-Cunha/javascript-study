for (let letra of "CODER") {
  console.log(letra)
}

//! O for in retorna os indices
const assuntoEcma = ['Map','Set','Promise']

for (let i in assuntoEcma) {
  console.log(i);
}

//! O for of ele retonar todos os valores 
for (const assunto of assuntoEcma) {
  console.log(assunto);  
}

const assuntoMap = new Map([
  ['Map', {abordado:true}],
  ['Set', {abordado:true}],
  ['Promise', {abordado:false}]
])

//! vai retornar chaves e valores
for (let assunto of assuntoMap ){
  console.log(assunto)
}

//! para pegar apenas as chaves
for (let chave of assuntoMap.keys()) {
  console.log(chave);
}
//! para pegar apenas os valores
for (let valor of assuntoMap.values()) {
  console.log(valor);
}

//! Posso pegar as chaves e valores e desistruturar 
for (const [chave, valor] of assuntoMap.entries()) {
  console.log(chave,valor);
}