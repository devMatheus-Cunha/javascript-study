const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}
console.log(JSON.stringify(obj)) // como converter um obj para um JSON/formato textual e não converteu a funcao pois JSON e um formato de dados
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))// como converter um JSON/formato textual para um objeto || todo atributo em JSON tem q estar entre "" e tbm as string escritas.