//? UM ALUNO PERGUNTOU, VOCE ATRIBUIU UM OBJETO A UMA CONSTANTE E DPS VC ALTEROU SEUS ATRIBUTOS, MAS SE ELA E UMA CONSTANTE COMO VC CONSEGIU ALTERAR, JA Q UMA CONST NAO PODE SER ALTERADA OU DECLARADA MAIS DE UMA VEZ 

//const || enderço || dados
//* pessoa -> 123 -> {...}
// quando eu faço isso eu altero o dado do enderço e não o endereço por isso não da erro pois eu nao estou mududando o endereço onde a const pessoa está apontando e sim seus dados
const pessoa = { nome: 'matheus'}
pessoa.nome = 'pedro'
console.log(pessoa)

// oq eu não posso fazer e alterar a const pessoa de fato igual neste exemplo 
// aqui estou tentando mudar o enderço a const pessoa recebe e tentando passar novos valores 
//*const || enderço || dados
//*pessoa -> 456 -> {...}
// pessoa = {nome:'ana'}

// esta tag faz com que vc congele o objeto e não pode mais alterar ele ou manipular, o valor dele fica definido a partir do momento que vc usa Object.freeze, vc bascicamente define esse obj constante sem alteração
Object.freeze(pessoa)
pessoa.nome = 'lucas'
pessoa.idade = 45
delete pessoa.nome // tambem não consigo deletar
console.log(pessoa.nome) // aqui vai continuar apontando para pedro pois eu cogelei o objeto e nao pega a alteração feita
console.log(pessoa) // tambem não para adicionar um novo atributo

// quando eu crio um objeto desta forma eu ja falo que desde do inicio ele vai ser constante e não pode ser alterado em nenhum momento igual acima 

const pessoaConstante = Object.freeze({nome:'joao'})
pessoaConstante.nome = 'lucas' // não ira funcionar 
console.log(pessoaConstante)

