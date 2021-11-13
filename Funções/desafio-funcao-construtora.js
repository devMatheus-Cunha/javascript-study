function Criarpessoa(nome) {
  this.nome = nome
  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Criarpessoa('Matheus');
p1.falar()