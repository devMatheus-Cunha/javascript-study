//! Template String 
const produto = "Xiaomi"
console.log(`${produto}`)

//! Destructuring 
const [l, e, ...tras] = "coder"
console.log(l, e, tras)

const [a, , b] = [1, 2, 3]
console.log(a, b)

const {
  idade: i,
  nome
} = {
  nome: 'ana',
  idade: 10
}
console.log(i, nome);

//?--------------------

//! Function Arrow 
const soma = (a, b) => a + b
console.log(soma(10, 2));

const sub = (a, b) => {
  return a - b
}
console.log(sub(10, 2));

//! Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//! Parametro default
function log(texto = 'node') {
  console.log(texto)
}
log()
log('React')

//! Operador Rest 
function total(...numeros) {
  let total = 0
  numeros.forEach((number) => total += number)
  return total
}
console.log(total(2, 3, 4, 5))

//?--------------------

//! Object.values / Object.entries / Object.keys
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//! Melhorias na notação literal
const name = 'Matheus'
const pessoa = {
  name,
  ola(){
    return 'Ola'
  }
}
console.log(pessoa.name, pessoa.ola());

//! Class 
class Animal {}
class Cachorro extends Animal {
  falar(){
    return 'au au'
  }
}
console.log(new Cachorro().falar());
