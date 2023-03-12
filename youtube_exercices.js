/**
 * Objetos literales, ejercicio perro (nombre, edad y función ladrar)
 */


let jonmircha = () =>{

let nombre = "kEnAi",
edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function (){
        console.log("guau guauu!")
    }
}
console.log(perro);
perro.ladrar();

const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("guau guauu guuauuuuuuuu!")
    }
}

console.log(dog);
dog.ladrar();

}
//  jonmircha();


/**
 * Objetos literales, ejercicio persona (nombre, segundo nombre)
 */
let juanwMedia = ()=>{


// Metodo define acciones, parametros caracteristicas.
const person = {
    name :"Juan",
    sayHello(){                               // Las funciones NO pueden ser de tipo flecha, no tienen contexto propio de this y lo toman del ámbito exterior.
        console.log(`Hi, I'm ${this.name}`)},  // comun form
    
    };

person.surname = "Andrés";

console.log(person.surname);
// person.sayHello = sayHello;                   // other form deleting sayHello from propertys

//     function sayHello (){
//     console.log(`Hi, I'm ${this.name}`);
// }

}
// juanwMedia();

/**
 * Objetos literales, ejercicio nombre usuario y función saludar usando this
 */
let juanwMediaThis = () =>{


let user = {
    name : 'Juan',
    greet: greet
    }

    function greet (){
    console.log(`Hi, i'm ${this.name}`);
}

user.greet(); // this === usaer
greet();      // this === window
          

}
// juanwMediaThis();

/**
 * Objetos literales, persona, función hablar y datos adicionales
 */
let maruluanEspirituSanto =()=>{


const person={
    // key: value
   id : 1,
   name: "Marluan",
   talk: function(){
    console.log("I'm talking");
   },
   isStudent: true,
   cityInfo:{
        name: 'Santo Domingo'
   },
   schoolInfo: function(){
    return {
        name: 'ITLA'
    }
   }
};

person.age = 22;

person.talk();
console.log(person['id']);   // es lo mismo para invocar.
console.log(person.cityInfo);
console.log(person.schoolInfo());
console.log(person.schoolInfo().name);
console.log(person.age);

delete person.age;
console.log(person);


}
// maruluanEspirituSanto();

/**
 * Orientacion a objetos, clases, metodos y herencia. (Comida,galleta))
 * nombre de las clases, siempre en mayúsculas para identificarlas mejor. Class crea una plantilla
 * class crea una plantilla para dar atributos luego, es general.
 * Los metodos son funciones que podemos llamar dentro de un objeto y que pueden interactuar con sus propiedades
 */

let codeHive = () => {

// const comida = {
//     id: 1,
//     nombre: "manzana",
//     color: "rojo",

// };

// console.log(comida.nombre);

class Comida {               
    constructor(id, nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    nombrar(){
        return `${this.nombre} de color ${this.color}`;
    }
}      

class Galleta extends Comida {
    constructor(id, nombre, color, sabor){
        super (id, nombre, color);
        this.sabor = sabor;
}
    nombrarGalleta (){
return `Galletas ${this.nombre} sabor ${this.sabor}`;
}
}
const manzana = new Comida (1, "manzana", "rojo");
const pera = new Comida (2, "pera","verde");

const oreo = new Galleta (3, "oreos", "negro", "chocolate");
const chokis = new Galleta (3, "chokis", "marron", "vainilla");


console.log(manzana);
console.log(pera);
console.log(oreo.nombrarGalleta());
console.log(chokis.nombrarGalleta());

}
// codeHive();


/**
 * Objetos literales, makeitreal camp.
 * Objetos son una grupación de propiedades y cada propiedqad está compuesta por una llae y un valor.
 * Agregar propiedad, borrar propiedad, recorrer objeto.
 * for let "variable" in "objeto"{
 * console.log(carro[llave])};
 */
let makeItReal =()=>{

const pedro ={
        nombre: "Pedro Peréz",
        edad: 30,
        activo: true,
        hobbies: ["programar", "squash", "piano"]
}

console.log(pedro);
}
// makeItReal();


/**
 * Bucles y ciclos
 * Inicialización, condición de permanencia, actualización de la variable que controla esa condición
 * while: mientras se cumplan una condicion se ejecutara el codigo entre llaves
 * do while: lleva una primera ejecucion dentro del bloque del do y despues el while
 * Array: estructura de datos donde podemos almacenar distintos slots, variables, datos, etc.
 * 
 * 
 * 
 */

let carlosAzaustre =()=>{

let condicion
while(condicion){
    codigo
}

// let i=1
// while(i<11){
//     console.log(i);
//     i++
// }

function bucleWhile(num){
    let i = 0;
    while (i<num){
        console.log(i);
        i++
    }
}
// bucleWhile(11);

function doWhile (num){
    let i = 0;
    do{
        console.log(i);
        i++;
    } while(i<num);
}

// doWhile ();

// for(inicializacion; condicion; actualizacion){
// }

function bucleFor(num){
    for (let i=0; i<num; i++){
        console.log(i);
    }

}

// bucleFor(11);

// const array = [];
// array [0] = "1";
// array [1] = "2";
// array [0] = "1";

const obje = {
    unArray: new Array(10000)
};

function badPerformance(){
    console.time("bad");
    for (let i=0; i<obje.unArray.length; i++){
        obje.unArray[i] = "Hola";
    }
    console.timeEnd("bad");
  
}

function goodPerformance(){
    console.time("good");
    let unArray = obje.unArray;
    for (let i=0, longitud = unArray.length; i<longitud; i++){
        unArray[i] = "Hola";
    }
console.timeEnd("good");

}
badPerformance();
console.log("-------------");
goodPerformance();

const miArray = [1,2, 3, 4];
miArray.forEach((item, index)=>{
console.log(`El valor de la posición ${index} es: ${item}`);
})

const libro ={
    titulo: "aprendiendo javascript",
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24.90",
}
const props = Object.getOwnPropertyNames (libro);   // transformar un objeto a array para usar foreach
props.forEach(name=>{
    let valor =
    Object.getOwnPropertyDescriptor(libro, name).value
    console.log((`La prop ${name} contiene: ${valor}`));
})


}

// carlosAzaustre();


/**
 * Recorrer una matriz con un bucle
 * 
 * 
 * 
 * 
 */

// let aProgramar =()=>{

const miArray = [
    [1,2, 3],
    [4, 5, 6],
    [7, 7, 9]
];

 miArray[0]

 for (let i = 0; i < miArray.length; i++) {
   console.log(miArray[i]); [1,2,3], [4, 5, 6], [7, 7, 9] 
   let fila = miArray[i];
   for (let i = 0; i<fila.length; i++){
    console.log(fila[i]);
   }

    
 }







// }

// aProgramar();
