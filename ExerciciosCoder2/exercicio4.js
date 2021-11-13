function nomeDoMes(mes) {
  switch (mes) {
    case 1:
      return 'janeiro'
    case 2:
      return 'fevereiro'
    case 3:
      return 'março'
    case 4:
      return 'abril'
    case 5:
      return 'maio'

    default:
      break;
  }
}
console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
