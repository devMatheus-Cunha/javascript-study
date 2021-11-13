const alunos = [
  {nome:'joao', nota:7.3, bolsista:false},
  {nome:'maria', nota:9.2, bolsista:true},
  {nome:'pedro', nota:9.8, bolsista:false},
  {nome:'ana', nota:8.7, bolsista:true}
]


// Aqui ele basicamente pegou as notas do alunos e fez a soma deles, o IniEAculmulador recebeu o valor do primeiro atributo nota e atual recebeu o valor do segundo atributo nota e fez a soma deles, depois ele pegou a nota acumulada e fez a soma com o terceiro atributo e depois fez a msm logica ate o final.
//O reduce ter um laço for internamente e por isso percorreu todo o array
const resultado = alunos.map(a => a.nota).reduce((IniEAculmulador,atual)=>{
  console.log(IniEAculmulador,atual)
  return IniEAculmulador + atual
},0) // aqui eu consigo passar o valor do atributo como valor incial
console.log(resultado)