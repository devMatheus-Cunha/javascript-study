function falarDepoisDe(segundos, frase) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(frase) //? uma promisse aceita apenas um parametro no seu resolve ou rejext
    }, segundos * 1000);
  })
}
 //* O uso do then e para acessar de forma correta o resultado de uma promessa quando e resolve || e tambem posso ebncadear mais de um then 
 //* E para tratar quando der reject se usa catch
falarDepoisDe(2,'Ola meu filho').then(frase => frase.concat('!!!')).then(outraFrase => console.log(outraFrase)).catch(frase => console.log(frase))
