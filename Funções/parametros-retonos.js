function area(largura,altura) {
  const area = largura * altura 
  if (area > 20){
    console.log('Altura ultrapassada') // aqui nao tem return 
  } else{
    return area // Aq tem return 
  }
}

console.log(area(5,2)) 
console.log(area(5,1,2,3,5,4)) // posso passar mais de um parametro que ele nao vai constar erro e vai ignorar as outras a mais
console.log(area(2)) // não da erro mas da NaN devido a falta de paramentros 
console.log(area(5,5)) 