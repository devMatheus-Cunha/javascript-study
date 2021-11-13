const nome = "matheus"

console.log(nome.charAt(4)) //-> seleciona o elemento da posição 4 (letra e)

console.log(nome.charCodeAt(3)) //-> ele vai selecionar o elemnto 3 que e letra H e passar seu valor na tabela unicode

console.log(nome.indexOf("e")) // -> ele retorna o elemento do indice do elemento selecionado que seria o 4 nesse caso

console.log(nome.substring(1)) // -> ele retorna os valores a partir do indice selecionado nesse caso apareceria atheus 

console.log(nome.substring(0,3)) // -> aqui diz que vai do indice 0 ao 3 mas sem incluir o ultime indice que no caso seria o 3

console.log(nome.replace("matheus","pedro")) // -> ele substitiu um elemento que escolhi 

console.log(nome.replace('h', 't')) // -> tambem posso substituir apenas um elemento por outro

