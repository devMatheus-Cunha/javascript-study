class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'professor') {
    super(sobrenome) // aqui ela esta instanciado o construtor da super class q e o avo || e como se estivesse passadno esse codigo aqui tbm //!constructor(sobrenome) {this.sobrenome = sobrenome}
    this.profissao = profissao
  }
}

class Filho extends Pai{
  constructor(){
    super('Gomes') //  aqui e na msm logicar da instaciar o constructor da super class a diferença que aqui estou passando um valor para o paramentro e como a ligação das eranças entre eles esse paramentro vai chegar ate o this.sobrenome = sobreno do avo e dar o valor de Gomes
  }
}

const filho = new Filho;
console.log(filho)