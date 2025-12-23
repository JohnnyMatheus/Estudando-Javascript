const nome = 'O senhor dos Anéis';
const ano = 1954;
const autor = 'J.R.R. Tolkien';

const nomeFilme = ' O senhor java';
const anoFilme = '2001';
const diretorFilme = 'Peter Jackson';

const livro = {
    nome: 'O senhor dos Anéis',
    ano: 1954,
    autor:'J.R.R. Tolkien'
}

const filme ={
    nome: 'O senhor dos Anéis',
    ano: 2002,
    autor: 'J.R.R. Tolkien',
    diretor: 'Peter Jackson'
}

console.log(2025-livro.ano)

console.log(livro.nome)

console.log(livro.nome + ' '+ filme.diretor)

const texto = document.querySelector('p');
console.log(typeof texto.innerHTML)


// saber quanto ele opupa na tela
console.log(texto.clientHeight)

console.log(autor.length)

console.log(autor.toUpperCase())


const decimal = 2.99;
console.log(decimal.toFixed()) //retorna uma string

console.log(Number(decimal.toFixed().length))