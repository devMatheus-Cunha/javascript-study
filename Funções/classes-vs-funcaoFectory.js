//! Usando class
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar(){
   return (`Meu nome e ${this.nome}`)
  }
}

const p1 = new Pessoa('Pedro'); // 'Pedro' foi passado como parametro para o construtor 
console.log(p1.falar())


//! Usando function fectory 
//Essa ideia aqui e melhor de usar 

const criarPessoas = nome =>{
  return{
    falar: function() { // poderia usar funcao arrow para deixar mais simples mas passei assim para ficar mais claro 
      console.log(`Meu nome e ${nome}`)
    },
    falar2: console.log(`Meu nome e ${nome}`) // poderia passar aassim tbm 
  }
}
//ela ja auto isntacia por isso nao precisa usar new
const p2 = criarPessoas('Matheus'); // 'Matheus' foi passado como paramentro para a funcao criarPessoas
p2.falar()

