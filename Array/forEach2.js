//! Simulando como funciona um forEach por dentro dele e como implementar ele a uma funcao
// e a msm coisa que acontece usando o foreach no ex anterior 
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; ++i) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice +1}) ${nome}`)
})