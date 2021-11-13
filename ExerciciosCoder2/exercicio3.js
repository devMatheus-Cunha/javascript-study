function calcularSalario(horas,ganho) {
  let calculoSalario = horas * ganho
  return `Salário igual a R$ ${calculoSalario}`
}
console.log(calcularSalario(150, 40.5))
console.log(calcularSalario(180, 60))