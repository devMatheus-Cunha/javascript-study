//!É uma função auto invocada, na sua própria declaração ela já esta invocada e declarada 

//? ela e declarada desta forma 

(function() {
  console.log('Será executada na hora!')
  console.log('Ela foge do escopo global')
})()

