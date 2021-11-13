 class Lancamento { // quando esta class for instaciada usando o new o constructor() passa ser os paramentros da funcao Lancametno
   constructor(nome = 'Generico', valor = 0) {
     this.nome = nome
     this.valor = valor
   }
 }

 class CicloFinanceiro {
   constructor(mes, ano) {
     this.mes = mes
     this.ano = ano
     this.lancamentos = []
   }

   addLancamentos(...valoresPassados) { //se usa ...valoresPassados pois pode receber mais de um valores e assim ele retonar e concatena todos eles valores com um array por issoe possivel usar o forEach 
    valoresPassados.forEach(l => this.lancamentos.push(l))
   }

   sumario() {
     let valorConsolidado = 0
     this.lancamentos.forEach(l => {
       valorConsolidado += l.valor
     })
     return valorConsolidado
   }
 }
 const salario = new Lancamento('Salaro', 45000);
 const contaDeLuz = new Lancamento('Luz', -220); // para tirar um valor usar o valor nagativo

 const contas = new CicloFinanceiro(6, 2020);
 contas.addLancamentos(salario, contaDeLuz)
 console.log(contas.sumario())