const calculo = (a, operador, b) => {
  switch (operador) {
    case '+':
     return (a + b)
    case '-':
     return (a - b)
    case '*':
     return (a * b)
    case '/':
     return (a / b)
    default:
     return ('Operações invalidas')
  }
}
console.log(calculo(2,'+',10))