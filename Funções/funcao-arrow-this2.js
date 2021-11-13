//! Nesse contexto o this aponta para um objeto global que e a tag global que no browser e o window então o resultado e true
let comparaComThis = function (param) {
  console.log(this === param)
}
comparaComThis(global)

//?------

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//! E false pois agora o this passou apontar para obj e não o obejto global
comparaComThis(obj)//! True

//?------
//!Neste caso como o this está dentro de uma função arrow e não aplicado a nenhum objeto dentro dela ele passar a ter o valor dele mesmo, this ou module.exports que nem no exemplo e como sabemos a função arrow não altera o this em nenhuma hipotese
let comparaComThisArroow = param => console.log(this === param)
comparaComThisArroow(global) //!False
comparaComThisArroow(obj)//!False
comparaComThisArroow(module.exports)//!True

//?------

//! Um teste para saber se conseguimos mudar o contexto do this usando o bind 
comparaComThisArroow = comparaComThisArroow.bind(obj)
comparaComThisArroow(obj) // ! False pois nada altera o this quando se e aplicado um arrow function