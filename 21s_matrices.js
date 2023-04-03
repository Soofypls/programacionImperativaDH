/* 1.- Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no. 
si están ordenados retornar true
caso contrario retorna false
ejemplos de arrays
    [4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true
 */
let arrayDesordenado = [4, 9, 2, 5, 6, 7, 1, 2];
let arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8];
const recibirArrayyversiEstanOrdenadosBullean = () => {
  const ordenarDescAsc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          return false;
        }
      }
    }
    return true;
  };

  let Desc = ordenarDescAsc(arrayOrdenado);
  let Asc = ordenarDescAsc(arrayDesordenado);
  console.log(Desc);
  console.log(Asc);
};

recibirArrayyversiEstanOrdenadosBullean();

/* 2.-Desarrollar una función que genere una matriz, deberá recibir por parámetros 
la cantidad de filas y columnas y retornar con valores secuenciales numéricos.
 */

const generarMatrizRecibirfilasColumnasRetornarValoresSecuenciales = () => {
  const Matriz = (numFilas, numCol) => {
    let mat = [];
    let acc = 1;
    for (let i = 0; i < numFilas; i++) {
      mat[i] = [];
      for (let j = 0; j < numCol; j++) {
        mat[i].push(acc);
        acc++;
      }
    }
    return mat;
  };

  let matrizGenerada = Matriz(3, 3);
  console.table(matrizGenerada);
};
generarMatrizRecibirfilasColumnasRetornarValoresSecuenciales();

/* 3.- Dado él siguiente array de personas
Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y 
realice un ordenamiento de forma ascendente
Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y 
realice un ordenamiento de forma descendente
Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función
  */
const personas = [
  {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
  },
  {
    nombre: "Roslyn Torres",
    legajo: 3925,
    edad: 27,
  },
  {
    nombre: "Cleo Lopez",
    legajo: 1965,
    edad: 34,
  },
  {
    nombre: "Daniel Malone",
    legajo: 3925,
    edad: 30,
  },
  {
    nombre: "Ethel Leon",
    legajo: 1915,
    edad: 34,
  },
  {
    nombre: "Harding Mitchell",
    legajo: 1905,
    edad: 25,
  },
];

const ordenarArrayObjetiASCDesc = () => {
  const orderAscLegajo = (arr, orden) => {
    let aux;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (orden === "ASC") {
          if (arr[j].nombre > arr[j + 1].nombre) {
            aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
          }
        } else if (orden === "DESC") {
          if (arr[j].nombre < arr[j + 1].nombre) {
            aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
          }
        }
      }
    }
  };
  orderAscLegajo(personas, "DESC");
  console.table(personas);
  orderAscLegajo(personas, "ASC");
  console.table(personas);
};

ordenarArrayObjetiASCDesc();

/* 4.- 
Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Crear una matriz con forma cuadraada
 */

const matrixGenerate = (col, row) => {
  let array = [];
  let add = 0;
  for (let i = 0; i < row; i++) {
    array[i] = [];
    for (let j = 0; j < col; j++) {
      add += 1;
      array[i].push(add);
    }
  }
  return array;
};

let resultadoMatriz = matrixGenerate(10, 10);
console.table(resultadoMatriz);

/* Función que reciba por parámetro la fila y retornar la suma de la misma. */
const sumarFila = (mat, fila) => {
  let suma = 0;

  for (let i = 0; i < mat[fila].length; i++) {
    suma += mat[fila][i];
  }

  return suma;
};

let sumaFila = sumarFila(Matrices, 1);
console.log(sumaFila);
