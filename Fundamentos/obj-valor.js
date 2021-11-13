const saudacao = 'opa' // Contexto lexico 1 


function exec(){
  const saudacao = 'ola meu chapa'  // Contexto lexico 2 
  return saudacao 
}

console.log(exec())