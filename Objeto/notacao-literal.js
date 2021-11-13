const a = 1
const b = 2
const c = 3

//*Forma antiga 
const obj1 = {a:a,b:b,c:c}
//*Froma atual
const obj2 = {a,b,c} // quando um atributo recebe o valor de si mesmo pode ser feito desta forma 
console.log(obj1,obj2)

//! Posso criar um objeto com atributo usando um string 
const obj3 = { 
  ['meu atributo']:10
}
//posso fazer assim tbm
const nomeAttr = 'atributo por var'
const valorAttr = 19
const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj3,obj4)

//! Definindo função no objeto
//forma antiga
const obj5 = {
  funcao1:function(){
    //...
  }
}
//forma atual
const obj6 = {
  funcao2(){
    //...
  }
}
console.log(obj5,obj6)
