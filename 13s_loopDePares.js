// let exercide13s_1=()=>{



/**
 * Deberás crear una función llamada loopDePares que reciba como parámetro un número 
 * y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración 
 * sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.
 */



let loopDePares =(numero)=> {
    for (let i = 0; i <= 100; i++) {
      if ((i + numero) % 2 === 0) {
        console.log(`El número ${numero + i} es par`);
      } else {
        console.log(i);
      }
    }
  }
// console.log(loopDePares(10));

let loopDePares2 =(numero)=>{

for (let i = 0; i < numero.length; i++) {
    const element = numero[i];
    
}


}


/**
 * Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, 
 * y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, 
 * en caso de que ese número sumado con el número pasado por parámetro sea impar, 
 * muestre en la consola la palabra pasada por parámetro.
 * 
 */

let loopDeImpares = (numero, palabra)=>{
    for (let i = 0; i <= 100; i++) {
        if ((i + numero) % 2 !== 0) {
          console.log(`${palabra} `);
        } else {
          console.log(i);
        }
      }

}

// loopDeImpares(7, "Soy un impar");

/**
 * Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, 
 * incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(8) debe retornar 36
 */

let sumatoria = (numero)=>{
        let suma = 0;
        for (let i = 1; i <= numero; i++) {
          suma += i;
        }
        return suma;
      }
// sumatoria();
// console.log(sumatoria(8));

/**
 * Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo 
 * con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */
let nuevoArreglo =(numero)=>{
    let array = [];
  
    for (let i = 1; i <= numero; i++) {
      array.push(i);
    }
  
    return array;
  }

//   nuevoArreglo();
//   console.log(nuevoArreglo(5));


/**
 * 
 * Deberás crear una función llamada split que reciba un string 
 * y simule el comportamiento de la función original. Si no estás 
 * seguro de cómo funciona, Google puede ayudarte. Importante: 
 * no podés usar el String.split(). Ejemplo:
 * split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
 * split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
 */

let split=(string)=>{

    let arr = [];
    for(let i of string) {
        arr.push(i);
    }
    console.log(arr); 



}

// console.log(split("hola"));
// console.log(split("chau"));

/**
 * Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros 
 * y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. 
 * 
 */

let arrayUno = [1, 2, 3, 4];
let arrayDos = ["h","o","l","a"];
let arrayHandler=(arr, err)=>{

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(`Soy ${arr[i]} y yo soy ${err[i]}`);
    
}

}
// arrayHandler(arrayUno,arrayDos );

/**
 * 
 * Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar 
 * “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
 * palindromo(“anilina”) debe retornar true
 * palindromo(“Ana”) debe retornar true
 * palindromo(“Enrique”) debe retornar false
 * 
 */

let palindromo=(palabra)=>{
let array = ["palabra"]




}

/**
 * un palindromo es una palabra q se escribe igual para los dos lados.
 * tendria sentido hacerlo como string, onda, letra por letra, y ver q la ultima
 * sea igual que la primera, la penultima con la segunda y asi..
 * como lo haría? mm
 * servirá un if? Si... 
 * ejemplos: aerea, radar, reconocer,
 * let str = "¡Si, Tu puedes hacerlo!";

console.log(str[0]); // ¡
console.log(str[1]); // S
console.log(str[2]); // i
console.log(str[3]); // ,
...
console.log(str[10]); // e

t mensaje = 'Soy un tipo feliz y afortunado';
console.log(mensaje.split(' ', 4)); 

se podra usar con lenght?
 */






// }

// exercide13s_1();



