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

// }

// exercide13s_1();