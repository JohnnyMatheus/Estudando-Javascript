const botao = document.querySelector('.botao');

function mostrar(){
    const texto =document.querySelector('.texto')
    // texto.classList.add('ativar')
    //  texto.classList.remove('ativar')
    texto.classList.toggle('ativar');

}

botao.addEventListener('click', mostrar )


