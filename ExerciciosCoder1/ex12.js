function frutas(nome) {
  switch (nome) {
    case 'maca':
      return 'Não vendemos esta fruta aqui'
      break;
    case 'kiwi':
      return 'Estamos com escassez de kiwis'
      break;
    case 'melancia':
      return 'Aqqui está, são 3 reais o quilo'
      break;
    default:
      return 'ERRO!!'
      break;
  }
}
console.log(frutas('melancia'))