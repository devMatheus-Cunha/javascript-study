function Carro(velocidadeMaxima = 200, delta = 5) {
  //* Atributo privado desta function 
  let velocidadeAtual = 0

  //! o this faz com q essas funções sejam  atributos do objeto principal que e Carro - this e basicamente o obj Carro
  //*Metodo publico com this 
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  //* Metodo publico 
  //! atraves dessa função eu estou tornando o valor privado de velocidadeAtual publico 
  this.getVelocidadeAtual = () => {
    return velocidadeAtual
  }
}

const uno = new Carro //! a const uno recebe a função Carro e se torna um obj desta função 

uno.acelerar() //! o this faz com que as funções declaradas dentro de Carro se torne atributos dela, e com isso podem ser declaradas fora dela 

console.log(uno.getVelocidadeAtual()) //! esta declaração e para imprimir e instaciar a função que retorna o atributo privado velocidadeAtual, e ela e declarada com uno. pois uno e o objeto que recebe um atributo com uma função.

// ?----

//! Assim seria a maneira se todos fossem declarados como funções
function Carro2(velocidadeMaxima = 200, delta = 5) {
  //* Atributo privado desta function 
  let velocidadeAtual = 0
  //*Metodo publico com this 
  function acelerar() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  //* Metodo publico 

  function getVelocidadeAtual() {
    return velocidadeAtual
  }
  //! Teria que declarar as funções dentro da Função Carro pois elas não são publicas para ser declaradas fora, por isso o uso do this acima transformando as funções em atributos de um objeto que com isso elas podem ser declaradas fora dela
  acelerar()
  console.log(getVelocidadeAtual())
}

const uno2 = new Carro2 //! eu posso instanciar o obj passando ou não () ex: Carro2() -> e uma opção tbm, mas como não irei mudar os atributos desta função não precisa passar 