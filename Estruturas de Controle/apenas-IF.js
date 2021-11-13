function soBoaNoticia(nota){
  if(nota > 7 ){
    console.log('Aprovado') //Vai imprimir apenas se bater a condição 
  }
}
soBoaNoticia(8) 
soBoaNoticia(6)

//?---------------------

function soFaloVdd(valor){
  if(valor){ // O js indetificar automaticamente quandos se passar apenas um var para Bolleano ou seja True ou Falso, e nesse caso so vai imprimir se for True
    console.log('E verdade') 
  }
}
soFaloVdd(null)
soFaloVdd('E verdade') 

//?---------------------


