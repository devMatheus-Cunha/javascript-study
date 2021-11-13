//* Vale lembrar que continue e brack so e suportado em for - while - switch 

//! O uso do brack ele vai terminar o codigo onde ele está sendo aplicado e finalizar por ai o laço de repetição, ou seja quando quando o x (que recebe os indices) for igual a 5 ele vai termianr o laço e jogar os resultados para proxima sentença de codigo 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

//! o uso do continue, ele vai intemrromper a linha de codigo e continua ela, ou seja quando o indice de y for igual a 5 ele vai interromper o laço e continuar ele em seguida, sendo direto ele vai eliminar o indice 5 e continuar o laço ate terminar e jogar o resultado para fora tbm 

for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

//! Outro exemplo
externo: for (a in nums) { //externo: e usado para criar um rotulo 
  for (b in nums) {
    if (a == 2 && b == 3) {
      break externo // e aqui nos usamos o brack no rotulo externo para ele fazer o break no for mais externo pois o break e o continue sempre aplica no mais proximo a ele || Entao disse que quando os pares forem 2,3 vai interromper a senteça de codigo 
    }
    console.log(`Pares ${a},${b}`)
  }
}