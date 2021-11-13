//! Exemplo para aplicar o bind e outras maneiras de fixar o this

// const pessoa1 = function (){
//   this.idade = 0
//   setInterval(function(){ // aqui o this não aponta para o obejto pessoa pois quem está disparando o função e o setInterval
//     this.idade++          
//     console.log(this.idade)
//   }.bind(this), 1000)  // aqui bind foi passado como this pois o this declarado acima ja e um obejto (como se a const pessoa que recebe a função fosse um objeto)
// }
// pessoa1()

//! Exemplo para mostar melhor explicação do this acima 
const Pessoa1 = {
  idade: 0,
  func(){ setInterval(function () {
      this.idade++
      console.log(this.idade)
    }.bind(Pessoa1), 1000)
  }
}
Pessoa1.func



// // //! Poderia fazer desta forma tambem 
// const pessoa = function (){
//   this.idade = 0
//   const relf = this // definindo uma const aqui recebendo this faz com que ele fique fixo nessa função e fixando o valor do objeto para que não altere
//   setInterval(function(){ 
//     relf.idade++          
//     console.log(relf.idade)
//   }, 1000) 
// }
// pessoa()

// //! Aqui a um exemplo que eu mesmo testei, quando se e usado a função Arrow ela não altera o contexto do this por isso na hora do setInterval não foi alterado e não precisado usar nenhuma das tecnincas acima
// function Pessoa() {
//   this.idade = 0
//   setInterval(() => {
//     this.idade++
//     console.log(this.idade)
//   }, 1000)
// }
// Pessoa()