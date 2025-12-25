// const lista = ['Javascript', 'HTML', 'CSS'];
// const body = document.querySelector('body');
// // for(let index =0; index < lista.length; index++){
// //     console.log(lista[index])
// //     body.innerHTML += '<li>' + lista[index] + '</li>';
// // }


/////////////////////////////////////////////////////////////////////

// const lista = ['Javascript', 'HTML', 'CSS'];
// const body = document.querySelector('body');

// function adicionarBody(item){
//     body.innerHTML += "<li>" + item + "</li>"
// }
// lista.forEach(adicionarBody);

//////////////////////////////////////////////////////////////////////


const links = document.querySelectorAll('nav a')
function logHref(item){
    const href = item.href;
    console.log(href);
}

links.forEach(logHref)

console.log(links[2])


const lista = ['Javascript', 'HTML', 'CSS'];

console.clear()
//pop remove o ultimo
//shift remove o primeiro
//push add
console.log(lista.pop())
console.log(lista)