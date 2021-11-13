// a pergunta é, a função minhaFuncao vai retonar o valor da const global ou o valor da const onde a funcao esta sendo isntanciada ?

//!Neste caso ela vai retornar o valor de global, pq no contexto lexico o js tbm leva em conseideração o contexto onde o codigo foi definido, e como minhaFuncao foi declarada onde a const valor receber 'global' e este valor que vai ser retornado. Então independe de onde a funcao foi declarada ela leva com ela onde o codigo foi definido e escrito.

const valor = 'global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'local'
  minhaFuncao()
}

exec()