const nav = document.querySelector("nav");


const produtos = document.querySelector('.produtos a');
console.clear()
console.log(nav);
console.log(produtos)


console.log(produtos.innerHTML)
console.log(produtos.href)

// produtos.remove()

nav.style.backgroundColor ='black'
nav.style.padding = "1rem";

nav.classList.add("ativo");

console.dir(nav)


// Tipos de dados

const texto = 'Javascript'
console.log(texto)

const frase = 'Isso é meu "jogo"';
console.log(frase)

console.log(texto + ' ' + frase)

let total =0;
const compras = 30;
const imposto =10;

total = compras + imposto;
console.log(total)

const dobro = total *2;
console.log(dobro)
const dividir =  total /2;
console.log(dividir)

const strings = "20" + "20";
console.log(strings)

const number = 20 +20;
console.log(number)


const transformar = Number("20") +20;
console.log(transformar)

console.log(1.223213)