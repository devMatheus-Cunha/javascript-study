//!ARMAZENANDO UMA FUNÇÃO ARROW A UMA VARIAVEL 
const soma = (a, b) => {
  console.log(a * b)
}
soma(4, 3)


//!UMA MANEIRA A MAIS FACIL DE DIMINUIR A SINTEX USANDO UM RECUSRO DO ARROW FUNCTION CHAMADO DE  RETORNO IMPLICITO
const sub = (a, b) => a - b

console.log(sub(10, 5))

//?Quando eu não tenho as chaves da function quer dizer que tenho uma função com apenas uma linha, vai executar apenas um sentença de codigo e ter o retunr implciito automaticamente, quando possui {} e obirgado declarar o return

//!Tambem pode ser feito assim quando possui apenas um parametro
let dobro = a => 2 * a
console.log(dobro(4))