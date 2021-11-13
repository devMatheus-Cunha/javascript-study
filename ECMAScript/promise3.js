function gerarNumeroEntre(min, max) {
  // uma verificação para caso a pessoa inverta e passe primeiro o valor max e dps o min
  if (min > max) {
    [max, min] = [min, max] //  uma destructor passando o valor de max = min e de min = max
  }
  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}
// * Posso passar tbm passar a função de verificar se par ou impar externamente para ter uma maior separação e organização na hora de passar o .then
// function veriImparPar(num) {
//   let result = num % 2
//     if (result == 0) {
//       console.log(`Resultado: ${num} -> ele e par`); 
//     } else {
//       console.log(`Resultado: ${num} -> ele e impar`);
//     }
// }

gerarNumeroEntre(1, 100)
  .then(num => {
    let result = num % 2
    if (result == 0) {
      console.log(`Resultado: ${num} -> ele e par`); 
    } else {
      console.log(`Resultado: ${num} -> ele e impar`);
    }
  })
  

