const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Foi aprovado')
  } else {
    console.log('Não foi aprovado')
  }
}

imprimirResultado(8)
imprimirResultado(6.5)