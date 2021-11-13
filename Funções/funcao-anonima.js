const soma = function (x, y) {
  return x + y
}

const imprimirResultaddo = function (a, b, operacao = soma) { //* o parametro operacao recebeu a função soma como padrão, então operação passou a ser uma função.
  console.log(operacao(a, b)) // * Passamos no parametro da função operação, a e b, ou seja a função soma por padrão ou a q for passada vai agir em cima dos paramentros a e b
}
imprimirResultaddo(3, 5) //! como não passado nenhum função para o parametro operacao ele vai receber por padrao a função soma e ira agir somando os dois valores a e b

imprimirResultaddo(3, 5, function(x,y) {return x * y}) //! aqui foi passado para o parametro operacao a funcao que multiplica os paramentro a e b

imprimirResultaddo(4, 3, (x, y) => x - y) //! pode ser passado uma função arrow tbm tanto implcita ou nao implicita // funções arrow sempre serão funções anonimas 

//? Podemos declara uma funcao anonima dentro de um objeto 
const pessoa = {
  falar: function() {
    return 'Ola meu amigo'
  }
}

console.log(pessoa.falar())

