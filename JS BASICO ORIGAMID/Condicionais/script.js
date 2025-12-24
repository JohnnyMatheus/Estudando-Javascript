// const condicao = Boolean(true)
// console.log(condicao)

// //Falso
// const condicao2 = Boolean("") //<- falso
// console.log(condicao2)

// //Vedadeiro pois não está vazio conta espaço
// const condicao3 = Boolean(" ") //<- Verdadeiro
// console.log(condicao3)

// let total = 0
// if(total == 0){
//     console.log(Boolean(total))
// }


// // Operadores lógicos

// const elemento = document.querySelector('p')

// if (elemento && document.querySelector('body')){
//     console.log('teste')
// }else{
//     console.log('deu ruim')
// }

// if (elemento || document.querySelector('body')){
//     console.log('teste')
// }

const elemento = document.querySelector('p')
const texto = elemento.innerText;

console.log(texto)


if(texto.toLowerCase === "HtmL"){
    console.log('Executar código');
}


