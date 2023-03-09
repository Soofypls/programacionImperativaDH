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


const tabla = (numero) => {
    if (numero % 1 !== 0 || numero < 1 || numero > 11) {
      console.log("lo siento el numero no es valido");
      return;
    }
  
    let i = 1;
    while (i <= 10) {
      console.log(`${numero} * ${i} = ${numero * i}`);
  
      i++;
    }

  
  tabla(5);
}

console.log(numero);
