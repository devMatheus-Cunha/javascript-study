// *  Usando a notação literal 
const obj1 = {
  nome: "criando de forma literal"
}


// *  Criar atraves da função new Object
const obj2 = new Object
obj2.nome = 'Criando atraves do new objeect'


// * Crinado usando funçãoo construtora 
function Produto(nome, preco, desc) {
  // usando o this eu faço com que os atributos sejam publicos fora da funcao produto, com isso eu posso alterar o valor do produto ou isntanciar a funcao que criei aqui dentro, ja os atributos preco e desc não são publicos nao posso alterar 
  this.nome = nome
  this.calcularDesc = () => {
    let desconto = preco * (1 - desc)
    return `Seu produto é ${nome}, e com desconto aplicado tem o valor de ${desconto}`
  }
}
const produto1 = new Produto('Celular', 2000, 0.10)
console.log(produto1.calcularDesc())

// como nome esta publico eu posso alterar seu valor fora da função 
produto1.nome = 'computador'
console.log(produto1.nome)

// * Criando usando função Fectory 
function crairFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getCalcularSalrio() {
      let calculo =  (salario / 30) * (30 - faltas)
      return calculo.toFixed(2)
    }
  }
}

const funcionario = crairFuncionario('Matheus',20000,2)
console.log(funcionario.getCalcularSalrio())

// a funcao fectory usa o return e com isso ela alto instacia um objeto neste caso, e todos seus atributos  ficam publicos igual na funcao construtora usando this, e com isso eu posso manipular seus atributos e valores fora dela igual abaixo, e tambem declarar a funcao igual acima 
funcionario.nome = 'lucas'
console.log(funcionario.nome)

// * Esta forma ele vai explicar mais para frente na aula de herença mas so para mostrar ela 
// ele criou uma objeto parecido com a forma literal, mas aq possui outros beneficios adicionais 
const filha = Object.create(null)
filha.nome = 'maria'
console.log(filha)