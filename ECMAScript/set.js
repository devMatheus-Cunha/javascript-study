//! Não aceita repetição/não indexada
const times = new Set()
times.add('vasco')
times.add('cruzeiro').add('ceara').add('gremio')
times.add('vasco')// ele não mostrou este vasco pq ele não aceita repetição e considerou so o primeiro
console.log(times);

console.log(times.has('ceara')); 
console.log(times.size); // ? para dizier quantos elementos possui dentro do map
times.delete('gremio')
console.log(times);

//!posso transforamar um array em um set

const nomes = ['Matheus','Lucas','Pedro','Jose']
const nomesSet = new Set(nomes)
console.log(nomesSet);
console.log(nomesSet.has('Matheus')); 
console.log(nomesSet.size); // ? para dizier quantos elementos possui dentro do map
nomesSet.delete('Lucas')
console.log(nomesSet);

