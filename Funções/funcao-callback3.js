//! Exemplo de Callback em envento diferente do o de array 

//* Vamos criar um envento de click que no caso aqui vc jogara no console do browser.

// Aqui disse basicamente que toda vez que eu clicar no body aconteça o evento de aparecer a mensagem de 'evento disparado', essa e a ideia do callback, retornar a função declarada quantas vezes forem chamadas, tanto no array quanto no Exemplo anterior, no evento de click agora e em outras situações
document.getElementsByTagName('body')[0].onclick = (a) => console.log('evento disparado')
