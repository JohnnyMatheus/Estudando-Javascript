const alturaTela = console.log(window.innerHeight)


const larguraTela = console.log(window.innerWidth);

function coordenadaMouse(event){
    coordenada = {
        x: event.x,
        y: event.y
    }
    console.log(coordenada)
}

window.addEventListener('mousemove', coordenadaMouse)

// scroll da página
function scroll(){
    console.log('Usou o Scroll')
}

window.addEventListener('scroll', scroll)


//scroll com eixo y distancia scroll do topo

function scroll2(){
    console.log(window.scrollY)
}

window.addEventListener('scroll', scroll2)