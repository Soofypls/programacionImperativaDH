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