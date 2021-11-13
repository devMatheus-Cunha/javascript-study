//Aqui a um exemplo que eu mesmo testei, quando se e usado a função Arrow ela não altera o contexto do this por isso na hora do setInterval não foi alterado e não precisado usar nenhuma das tecnincas acima

function Pessoa() {
  this.idade = 0
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}
Pessoa()
// new Pessoa //! aqui eu estou instanciando o objeto pessoa que a mesma coisa q o