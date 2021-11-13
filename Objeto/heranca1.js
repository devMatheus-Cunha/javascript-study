Object.prototype.attr0 = 'z' //* este aqui e erança maxima de todos.
const avo = {
  attr1: 'a'
}
const pai = {
  __proto__: avo,
  attr2: 'b'
} //* o __proto__ diz para qual objeto e para pegar sua herança.
const filho = {
  __proto__: pai,
  attr3: 'c'
}
console.log(filho.attr1) //* na const filho não possui o attr1 mas como foi passado que nele recebe a herença do pai e o pai tem herança do avo ele vai verificar em todos eles se possui o attr1 e retonar caso.
console.log(pai.attr4) //* e se for passado um atributo que não se encontra em nenhuma herança sera retonardo indefinido.

//! Exemplo mais complexo 

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual += this.velMax
    }
  },
  status(){
    return `${this.velAtual}Km/h de ${this.velMax}Km/h maxima`
  }
}

const ferrari = {
  modelo:'f40',
  velMax:330 // ele vai sobrear o valor original de velMax, pois o ultimo atributo e valor com o mesmo e oq prevalece
}

const volvo = {
  modelo:'xc50',
  status(){ // estou sobreando a função status tbm, colocando o this.modelo e chamando a funcao novamente
    return `${this.modelo}: ${super.status()}` // a tag super e tipo o this. O this referencia o objeto atual o super se referencia ao prototype. e seu eu uso o this no lugar do super, como tem o msm nome de method ele via ficar chamando de forma recursiva.
  },
  __proto__:carro // tbm pooderia fazer desta forma no lugar de colocar igual abaixo
}

Object.setPrototypeOf(ferrari, carro) // aqui estou falando que ferrari tem carro como seu Prototype. Por isso consigo referenciar, pegar e sobrear valores entre carro e ferrari
ferrari.aceleraMais(300)
console.log(ferrari.status())

Object.setPrototypeOf(volvo, carro) // aqui estou falando que ferrari tem carro como seu Prototype. Por isso consigo referenciar, pegar e sobrear valores entre carro e volvo
volvo.aceleraMais(100)
console.log(volvo.status())