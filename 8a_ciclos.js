/**
 * Ejercicio 1: Estructura for1
 * La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.
 * 
 

const repeat = n => f => x =>
  n > 0 ? repeat (n - 1) (f) (f (x)) : x;

// print your name 5 times
repeat (5) (name => (console.log(name), name)) ('sofia');
 */

let ejercicioUnoFor = () => {
  for (let loro = 1; loro <= 5; loro = loro + 1) {
    console.log("soy un loro");
  }

  for (let lorito = 1; lorito <= 5; lorito++) {
    console.log("soy un lorito");
  }

  let loron = () => {
    for (let i = 1; i <= 5; i++) {
      console.log("Soy un loron");
    }
  };
  loron();

  // Esta funcion se aprobo en playground.
  function loro(texto) {
    for (let vuelta = 1; vuelta <= 5; vuelta++) {
      console.log(texto);
    }
  }

  loro("holi");
};

// ejercicioUnoFor();

/**
 * Ejercicio 2: Estructura for 2
 * En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta.
 * Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay
 * desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
 * Para resolver la ejercitación debemos utilizar el for .
 */
let ejercicioDosFor = () => {
  function noParesDeContarImparesHasta(numero) {
    let conteo = 0;
    for (let i = 0; i <= numero; i++) {
      if (i % 2 !== 0) {
        conteo = 1 + 1;
      }
    }
    return conteo;
  }
  console.log(noParesDeContarImparesHasta(4));
};

// ejercicioDosFor();

/**
 * Ejercicios -do while y while
 * Para este ejercicio te damos la función tablaDeMultiplicar ya definida,
 * la cual recibe un número como parámetro. Queremos que al ejecutarse la función muestre
 * por consola la tabla de multiplicar del 1 al 10 del número que reciba.
 */


let ejercicioUnowhile = ()=>{
    
go
tabla(5);

}
// ejercicioUnowhile();



/**
 * 
 * 1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
 */

