function tratarErroELancar(){
   throw "Aconteceu um erro" // throw e para imprimir a mensagem de forma de eerro no seu codigo e vc pode passar qualquer coisa nele, como um objeto, numero mensagem e mais 
   // e vc tambem pode imprimir algum outra coisa sem usar o throw
}

function imprimirNomeFritando(obj){
  try{ // try vc usa em uma sentença de codigo que possa acusar algum erro
    console.log(obj.nome.toUpperCase() + "!!!" )
  }catch(e){ // catch e usado para passar a mensagem de erro caso aconteça
    tratarErroELancar(e)
  }finally{ // e o final da setença, vc pode passar algo no final do erro ou ate mesmo se der tudo certo
    console.log('Acabou')
  }
}

const obj = {name:"Matheus"}
imprimirNomeFritando(obj)