// tudo aqui e True

console.log(!!(' ' || 1 || -1 || 'qualquer texto e qualquer numero acima de 0 e True' || [] || {} || Infinity || (umaConst = true))) 

// tudo aquie e False
console.log(!!('' || 0 || NaN || undefined || null || (umaConst = false))) 

let nome = "Matheus "

console.log(nome || 'digite seu nome')