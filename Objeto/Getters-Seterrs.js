// Get e Set são funções que dentro delas acessam valores, e sua vantagem e que pode ser usado para algum tipo de validação 
const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++
  },
  // set valor(valor) {
  //   this._valor = valor
  // }
  //* posso fazer uma validação, neste caso a sequencia sempre vai para frente 
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // neste caso ele vai ignorar pois estou passando um valor abaixo do anterior e como la em cima fiizemos uma validação que so atribuir ao _valor o valor se o atributo de valor for maior e no caso ele menor 
console.log(sequencia.valor, sequencia.valor)