const pessoa = {
  saudacao: 'bom dia',
  falar(){ //! recurso novo do es6 para declarar objeto mas isso e a msm coisa q ex abaixo
    console.log(this.saudacao) //! o this aqui recebe o valor do objeto que e pessoa
  }

  // falar: function() {
  //   console.log(this.saudacao)
  // }
}

pessoa.falar() //  aqui e a declaração do objeto e seu valor que e uma função 
const mudandoThis = pessoa.falar // aqui o this passou a apontar para outro objeto (outro contexto) que nao posui saudacao e por isso da um resultado undefined
mudandoThis() 

const fixandoThis = pessoa.falar.bind(pessoa) // bind e uma função onde vc passa um objeto onde quer que o this seja aplicado, ou seja quem é o this dentro da função falar ? //! pessoa - por isso bind recebe pessoa no paramentro bind(pessoa) 
fixandoThis() // então sempre o this dentro dessa função sera resolvido para o objeto pessoa