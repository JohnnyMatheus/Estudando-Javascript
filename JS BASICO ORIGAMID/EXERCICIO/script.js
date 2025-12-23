function livro(nome,ano,autor){
    const transformar = nome.toUpperCase();
    const calc = 2050 - ano;
    const frase = nome + ' por ' + autor;
    return{
        transformar,
        calc,
        frase
    }

}

teste = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(teste)