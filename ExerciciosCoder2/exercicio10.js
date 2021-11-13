//! Para pode pegar o primeiro e ultimo elemento de um array 
function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento = elementos[0]
  const ultimoElemento = elementos[elementos.length - 1]
  return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([5,7,14,85]))