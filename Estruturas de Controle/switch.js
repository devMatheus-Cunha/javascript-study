const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) { //!você passa o parametro que vc quer usar no caso aqui o valor da nota arredondado para baixo
    case 10: // Case seria as opções e os valores
    case 9: 
      console.log('Qaudro de Honra') // o que sera impresso caso o resultado for um dos cases acima
      break // para poder finalizar a sentença de codigo e nao rodar todas as outras opções caso o resultado seja desse bloco de case
    case 8: case 7: // pode ser colocado na mesma linha ou linhas diferentes que vai ser o mesmo resultado (se for o 7 ou o 8 vai cair no aprovado)
      console.log('Aprovado')
      break
    case 6:
    case 5:
    case 4:
      console.log('Recuperação')
      break
    case 3:
    case 2:
    case 1:
      console.log('Reprovado')
      break

    default:  // se caso nenhuma das opções forem encontrada ira para aqui, mesma logica do else
      console.log('Valor não encontrado')
  }
}

imprimirResultado(8)
imprimirResultado(9.33)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(11)
