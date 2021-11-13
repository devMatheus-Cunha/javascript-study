function aumentoSalario(plano, salario) {
  switch (plano) {
    case 'A':
      return salario * (1 + 0.10)
    case 'B':
      return salario * (1 + 0.15)
    case 'C':
      return salario * (1 + 0.20)
    default:
      return 'Plano não indentificado'

  }
}
console.log(aumentoSalario('A', 2000))
console.log(aumentoSalario('B', 2000))
console.log(aumentoSalario('C', 2000))
console.log(aumentoSalario('D', 2000))