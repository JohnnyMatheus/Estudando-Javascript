// 1 - arrays

const lista = [1,2,3,4,5];

console.log(lista);

console.log(typeof lista);

lista2 = ['Johnny Matheus', 30, 1.85];

console.log(lista2);

// 2 - indices

const alfabeto =['a','b','c','d','e'];
console.log(alfabeto[0]);
console.log(alfabeto[4]);
console.log(alfabeto[1]);

// 3 - propriedades
const numbers = [5,3,4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = 'Johnny';

console.log(myName.length);

// 4 - Métodos 

const otherNumbers =[1,2,3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Ciencia da Computação";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("C"))

// 5 - Objetos

const person = {
    name: "Johnny",
    age: 30,
    altura: 1.85

}

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);
