function veri(dia) {
  switch (dia) {
    case 'segunda':
    case 'terca':
    case 'quarta':
    case 'quinta':
    case 'sexta':
      console.log('Dia util')
      break;
    case 'sabado':
    case 'domingo':
      console.log('Fim de semana')
      break
    default:
      console.log('Dia invalido')
      break;
  }
}
veri('domingo')

// Recebendo valor como numero da semana ex 2 e segunda

function veri2(numero) {
  switch (numero) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log('Dia util')
      break;
    case 7:
    case 1:
      console.log('Fim de semana')
      break
    default:
      console.log('Dia invalido')
      break;
  }
}
veri2(2)