//! Sem usar Promise
// setTimeout(() => {
//   console.log('Executando callback1');
//   setTimeout(() => {
//     console.log('Executando callback2');
//     setTimeout(() => {
//       console.log('Executando callback3');
//     }, 2000);
//   }, 2000);
// }, 2000);

//! Usando Promise 
const mensage = (palavra) => {
  return new Promise((response)=>{
    response(console.log(`${palavra}`))
  })
}


mensage('callback').then(mensage => console.log(mensage)).then().then()
