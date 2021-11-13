const pai = {
  nome: 'Matheus',
  idade: 19,
  irmaos: 'sim'
}
const filha1 = Object.create(pai) // estou criando um objeto filha1 ja tendo pai como seu prototype
filha1.nome = 'Eduarda'
console.log(filha1.nome, filha1.irmaos)

//! Posso criar e fazer configurações detalhadas nela 
//* todos atributos que serão setado desta forma precisa ter  enumerable: true para ser listado quando for chamado o obj inteiro 
const filha2 = Object.create(pai, {
    nome: {
      value: 'emmly',
      enumerable: true,
      writable: true
    },
    corCabelo: {
      value:'preto',
      enumerable: true,
      writable: true
    }
  }
 
)
console.log(filha2)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//! Uma forma para percorrer todos atributos entre as heranças 
for( let key in filha2){
  console.log(key)
}

//se eu fizer desta forma so retorna oq esta em filha2 
console.log(filha2)

//! Uma forma de verificar se o atributo e dela mesma ou veio de herença 

for( let key in filha2){
  // hasOwnProperty basicamente verifica se aquela propriedade pertence a ela, e foi passado o key pois como esta dentro do for o key representa todas as propriedades entre as heranças
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`) // aqui e uma verificação usando operador ternario
  // Diz se a key passada pertencer a filha2 retorne ela, se não perterncer retorne falando `Por herança` e seu atributo
}