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