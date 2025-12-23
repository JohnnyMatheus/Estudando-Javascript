const condicao = Boolean(true)
console.log(condicao)

//Falso
const condicao2 = Boolean("") //<- falso
console.log(condicao2)

//Vedadeiro pois não está vazio conta espaço
const condicao3 = Boolean(" ") //<- Verdadeiro
console.log(condicao3)