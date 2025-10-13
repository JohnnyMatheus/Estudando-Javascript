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


// 6 - criando e deletando propriedades

const carro ={
    motor: 2.0,
    marca:"VW",
    modelo: "Tiguan",
    km: 2000,

}

console.log(carro);

carro.portas =5;

console.log(carro);

//deletando 

delete carro.motor;

console.log(carro)


console.log("7 -#######################################");
// 7 - mais sobre objetos

const obj ={
    a: 'teste',
    b: true
}
console.log(obj instanceof Object);


const obj2 = {
    c:[]

}
Object.assign(obj2,obj);

console.log(obj2);

console.log("8- #######################################");
// 8 -  Conhecendo melhor os objetos

console.log(Object.keys(obj));

console.log(Object.entries(obj));


console.log("9- #######################################");

// 9 - Mutação


const a = {
    name: "Johnny"
}

b = a;

console.log(a===b)

b.age=30;

console.log(a);

delete b.age;

console.log(a);

// 10 Loop em arrays

