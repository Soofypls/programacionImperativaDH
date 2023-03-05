// Ej#1 Nuestra tarea es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función".

function ejemplo(){
    let mensaje = "hola, soy una función";
return mensaje;
}

// Ej#2 Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. La misma debe retornar un String que diga: "hola, soy una función expresada".

let ejemploString = function(){
    return "hola, soy una función expresada";
}

// EJ#3 Debemos modificar el código que ya está escrito para agregarle los parámetros que la función necesita.

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

//EJ#4 Escribir las siguientes tres funciones:

// anterior: recibe un número como parámetro y devuelve ese número menos uno.
// triple: recibe un número como parámetro y devuelve el triple de ese número.
// anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

let numero = 5;


function anterior(numero){
    return --numero;
}

function triple(numero){
    return numero*3;
}

function anteriorDelTriple (numero){
    return anterior(triple(numero));
}

console.log(numero);

// EJ #5 Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.


let dameCinco = () => {return [1,2,3,4,5]};
let multiplicarPorDos = () => {return 123 * 2};
let mostrarNombre = () => {return "Mi nombre es Hernán"};

console.log(dameCinco());
console.log(multiplicarPorDos());
console.log(mostrarNombre());

// EJ #6 Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.

// let saludar = (nombre) => {
//     let saludo = "Ezequiel"
//     console.log() };

// console.log(saludar);

// let saludar = "Ezequiel"
// saludar = (saludo) => 'Hola, ' + saludo + '!';

// EJ #8 Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function. 

// function saludar(nombre, apellido) {
//     return 'Hola, ' + nombre + ' ' +  apellido + '!';
// }


let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

console.log(saludar(sofia, mansilla));