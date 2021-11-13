//? Faça uma mensagem de 'Olá Mundo'.... Exemplo: 'Olá Mundo' 
// const h1 = document.querySelector('#text').innerHTML = 'ola mundo'

// !--------------------------------

//?  Capture o valor do input e retoner ele 
// const button = document.getElementById('button')

// button.addEventListener('click', () =>{
//   const input = document.querySelector('#nome').value
//   document.getElementById('txt').innerHTML = input
// })

// !--------------------------------
//? exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

// const button = document.getElementById('button')
//  button.addEventListener('click', ()=>{
//   const input = document.querySelector('#nome').value
//    document.querySelector('h2').innerHTML = input.length
//  })

// !--------------------------------
//? exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

// const lampada = document.querySelector('img')
// const acessa = document.querySelector('#acessa')
// const apagada = document.querySelector('#apagada')
// const body = document.querySelector('body')

// acessa.addEventListener('click',function(){
//   lampada.setAttribute('src','https://i.stack.imgur.com/ybxlO.jpg')
// })

// apagada.addEventListener('click',function(){
//   lampada.setAttribute('src','https://i.stack.imgur.com/b983w.jpg')
// })

//com evento hover na lamapda

// lampada.addEventListener('mouseover',()=>{
//   lampada.setAttribute('src','https://i.stack.imgur.com/ybxlO.jpg')
// })

// !--------------------------------
//? Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher

// const button = document.querySelector('#button')

// button.addEventListener('click', () => {
//   const cpf = document.querySelector('#cpf').value
// })


// !--------------------------------

//? Para soma  dois valores

// const button = document.getElementById('somar')

// const somar = (a = 0, b = 0) => {
//   return parseFloat(a) + parseFloat(b)
// }

// button.addEventListener("click", () => {
//   const val1 = document.getElementById('val1').value
//   const val2 = document.getElementById('val2').value 
//   const h2 = document.querySelector('h2')
//   h2.innerHTML = somar(val1, val2)
// })

// !--------------------------------

//? Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente Alterar-Style de uma div 

// const buttonVerde =  document.querySelector('#verde')
// const buttonVermelho =  document.querySelector('#vermelho')

// buttonVerde.addEventListener('click', ()=>{
//   buttonVerde.style.backgroundColor = 'green'
//   buttonVerde.style.padding = '30px'
// })

// buttonVermelho.addEventListener('click', ()=>{
//   buttonVermelho.style.backgroundColor = 'red'
//   buttonVermelho.style.padding = '30px'
// })

// !--------------------------------

//? Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.

//Calculo usando If e Else
// const imparOuPar1 = a => {
//   let result =  a % 2
//   if(result == 0){
//     console.log('Numero par')
//   }else{console.log('Numero impar')}
// }
// imparOuPar1(84)

// //Calculo usando operador ternario
// const imparOuPar2 = a => {
//   let result =  a % 2
//   return result == 0 ? 'Numero par' : 'Numero impar'
// }
// console.log(imparOuPar2(111))

// !-------------------------------- 

//?(22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

// const button = document.querySelector('#button')

// const verificarIdade = (pessoa) => {
//   if (pessoa > 2003) {
//     return 'Você e menor de idade'
//   } else if (pessoa >= 1 && pessoa <= 2002  ) {
//     return 'Você e maior de idade'
//   } else{
//     return 'Nenhum valor foi passado'
//   }
// }

// button.addEventListener('click', () => {
//   const idade = document.querySelector('#idade').value
//   document.querySelector('h2').innerHTML = verificarIdade(idade)
// })

// !-------------------------------- 

//?(23) Dentro da div com o id 'resultado', escreva 1x ('Repetição'). @dica 'innerHTML', el.innerHTML = 'Repetição';
//?(25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)

// const button = document.querySelector('#button')
// const div = document.querySelector('#resultado')


// function addTxt() {
//   for (let textos = 1; textos <= 20; textos++){ 
//     div.append(' Repetição')
//    }   
// }
// button.addEventListener('click', ()=>{
//  addTxt() 
// })

// !-------------------------------- 

//?(26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)

// const button = document.querySelector('#button')
// const div = document.querySelector('#resultado')

// const txt = [' Repetição']
// function addTxt(mensagem) {
//   for (let textos = 1; textos <= 5; textos++){ 
//     div.append(mensagem)
//    }   
// }

// button.addEventListener('click', () => {
//   txt.forEach(addTxt)
// })

// !-------------------------------- 


//?Printar 5 vezes o que for passado no input txt 

// const button = document.querySelector('#button')
// const div = document.querySelector('#resultado')

// function addTxt() {
//   for (let textos = 1; textos <= 5; textos++){ 
//     const input = document.querySelector('#input-val').value
//     div.append(` ${input} -`)
//    }   
// }

// button.addEventListener('click', () => {
//   addTxt()
// })

// !-------------------------------- 

//?(27) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)

// const button = document.querySelector('#button')
// const div = document.querySelector('#resultado')

// function addTxt() {
//   let textos = 1
//   while (textos <= 10) {
//     div.append(' repetição')
//     textos++
//   }
// }
// button.addEventListener('click', () => {
//   addTxt()
// })

// !-------------------------------- 

//?(30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)

// const div =  document.querySelector('#resultado')

// const numeros = [0,1,2,3,4,5,6,7,8,9,10]

// const tabuadaDo2 = item => {
//   div.append(`${item*2},`)
// }
// numeros.forEach(tabuadaDo2)

// !-------------------------------- 


// //? Retornando marcas que inciam com F
// marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
// marcasIniciadasComF = [];
// novoIndice = 0;

// function selecionarMarcas(item, i) {
//     if (marcas[i].indexOf("F") == 0) {
//         marcasIniciadasComF[novoIndice] = marcas[i];
//         novoIndice++;
//     }
// }

// marcas.forEach(selecionarMarcas);
// div.append(marcasIniciadasComF);

//!----------------------------

//?(31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)

// const button = document.querySelector('#button')
// const div = document.querySelector('#resultado')
// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// button.addEventListener('click', () => {
//   const number = parseFloat(document.querySelector('#number').value)
//   let a = number
//   const tabuadaDo2 = (item) => {
//     div.append((`${item * a} `)) 
//   }
//   numeros.forEach(tabuadaDo2)
// })

//!----------------------------


//?  ((32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado

// const frases = ['Lol é melhor que Dota', 'Lol é melhor que CS']

// function verificarDota(frase) {
//   if (frase.indexOf('Dota') > -1) {
//     console.log('Possui Dota')
//   } else {
//     console.log('Não possui dota ')
//   }
// }

// frases.forEach(verificarDota)

//!----------------------------


//?(37.a) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] E Exiba a quantidade/comprimento que ele tem com a função .length
//? (37.b) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] E exiba um a um com alert() - De preferencia para laços de repetição (for, forEach, while, do{}while)

// const deuses = ['Aegir', 'Aud', 'Balder']

// for (let i = 0; i < deuses.length; i++) {
//   console.log(deuses[i])  
//   alert(deuses[i])

// }

//!----------------------------


//? (37.c) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] E exiba um a um com alert() - De preferencia para funções com callbacks, Ex:(map, reduce, filter)

// const deuses = ['Aegir', 'Aud', 'Balder']

// deuses.filter(function(deus) {
//   alert(`Deuses ${deus}`)
// })

// deuses.forEach(alert)//* apenas assim ele ira aplicar o alert para todos do array 

//!----------------------------


//?(37.e) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push()

// const deuses = ['Aegir', 'Aud', 'Balder']
// const addDeues = ['Loki', 'Odin', 'Frey']

// function add () {
//   for (let i in addDeues)
//    deuses.push(addDeues[i])
// }
// add()
// console.log(deuses)

//!----------------------------


//? (37.f) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função .length

// const deuses = ['Aegir', 'Aud', 'Balder']
// const addDeues = ['Loki', 'Odin', 'Frey']

// for (let i = 0; i < addDeues.length; i++) {
//   deuses.push(addDeues[i])
// }
// console.log(deuses)

//!----------------------------

//? (37.g) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9], E exiba de forma crescente
// var numbers = [5, 7, 1, 8, 9]
// numbers.sort()
// console.log(numbers)

//!----------------------------

//? E exiba de forma decrescente.

//!----------------------------

// var numbers = [5, 7, 1, 8, 9]
// numbers.sort(function (a, b) {
//   return b - a;
// })
// console.log(numbers)

//!----------------------------

//?(38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'] E exiba todos os nomes, dentro do html: <ul id="nomes"></ul>

// const deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
// const ul = document.getElementById('ul')

// for (let i in deuses) {
//   let creatUl = document.createElement('li')
//   let todoText = document.createTextNode(deuses[i])
//   creatUl.appendChild(todoText)
//   ul.appendChild(creatUl)
// }

//!----------------------------

//? (39) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul)
//! VOLTAR PARA FINALIZAR 

// const button = document.getElementById('button')
// const inputTxt = document.querySelector('#textInput')


// let todos = []



// function renderTodo() {




//   for (const todo of todos) {
//     let todoTxt = document.createTextNode(todo)
//     let todoLi = document.createElement('li')
//     todoLi.appendChild(todoTxt)

//   }

// }

// function buttonEnviar() {
//   todoTxt = inputTxt.value
  // todos.push(todoTxt)
//   var ul = document.getElementsByTagName('ul').innerHTML = ''
//   ul.concat(todos)


//   renderTodo()
// }


// button.onclick = buttonEnviar


