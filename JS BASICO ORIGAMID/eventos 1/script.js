// const curso = {
//     nome:'Javascript',
//     completar(){
//         console.log('Curso Completo');
//         console.log(this.nome)
//     },
// };

// curso.completar()

const ativar = document.querySelector(".ativar");
function ativarAoClick(event) {

    console.log('clicou em:',ativar)
}
ativar.addEventListener('click', ativarAoClick);


//////////////////////PARTE 2 AULA/////////////////////////////
const ativar2 = document.querySelector(".ativar2");
/** @param {MouseEvent} event */
function ativarAoClicar2(event){
    console.log(event.x)
    console.log(event.timeStamp)
    console.log(event.currentTarget)
    console.log(event.y)
}

ativar2.addEventListener('click', ativarAoClicar2)