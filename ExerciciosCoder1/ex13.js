function comprarCarro(carro) {
  switch (carro) {
    case 'hatch':
      console.log('Compra realizada com sucesso')
      break;
    case 'sedans':
    case 'motocicletas':
    case 'caminhonetes':
      console.log('Tem certeza que não prefere este modelo?')
      break;
    default:
      break;
  }
}
comprarCarro('hatch')