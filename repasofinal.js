let numeros = [5, 2, 6, 1, 3];

/** Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no. 
si están ordenados retornar true caso contrario retorna false
ejemplos de arrays
	[4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true*/
const ejercicio1_ordenarNumerosMayorAMenorBubble = () => {
  const ordernar = (array, instruccion) => {
    let aux;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        // (let j = 0; j < array.length -1 -i; j++) (con menos i es mejor)

        if (instruccion === "ASC") {
          if (array[j] > array[j + 1]) {
            aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
            return true;
          }
        } else if (instruccion === "DESC") {
          if (array[j] < array[j + 1]) {
            aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
            return false;
          }
        }
      }
    }
  };
  let resultado = ordernar(numeros, "ASC");
  console.log(resultado);
};

// ejercicio1_ordenarNumerosMayorAMenorBubble();

const ejercicio2_verificarSielArregloEstaOrdenadoBullean = () => {
  const verificarOrden = (arr) => {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        return "no esta ordenado";
      }
    }

    return "si esta ordenado";
  };

  let estaOrdenado = verificarOrden(numeros);
  console.log(estaOrdenado);
};
// ejercicio2_verificarSielArregloEstaOrdenadoBullean();

/*Desarrollar una función que genere una matriz, deberá recibir por parámetros 
la cantidad de filas y columnas y retornar con valores secuenciales numéricos.
*/

let matriz = [
  [1135, 2500, 900, 1600],
  [1750, 1890, 1900, 1300],
  [1700, 1150, 1690, 1900],
  [800, 1250, 1430, 2100],
];

const ejercicio3_funcionQueGenereMatrizRetornarValoresSecuenciales = () => {
  const recorrerCompleta = (mat) => {
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        console.log(mat[i][j]);
      }
    }
    return recorrerCompleta;
  };

  let res = recorrerCompleta(matriz);
  console.log(res);
};
