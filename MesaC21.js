//1.- Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no.
//a si están ordenados retornar true
//b caso contrario retorna false

const verificarOrden = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
let arr1 = [4, 9, 2, 5, 6, 7, 1, 2];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(verificarOrden(arr1));

console.log("*****************************************");

console.log(verificarOrden(arr2));

console.log("----------------------------------------");

//2.-Desarrollar una función que genere una matriz, deberá recibir por parámetros la cantidad de filas y columnas
//y retornar con valores secuenciales numéricos.

const generarMatriz = (filas, columnas) => {
  let mat = [];
  let acumulador = 1;
  for (let i = 0; i < filas; i++) {
    let fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(acumulador);
      acumulador++;
    }
    mat.push(fila);
  }
  return mat;
};

let matNueva = generarMatriz(3, 3);
console.log(matNueva);

console.log("----------------------------------------");

//3.-Dado él siguiente array de personas:

let personas = [
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

//a Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma ascendente

const orderAscLegajo = (personas) => {
  for (let i = 0; i < personas.length; i++) {
    for (let j = i + 1; j < personas.length; j++) {
      if (personas[i].legajo > personas[j].legajo) {
        let temp = personas[i];
        personas[i] = personas[j];
        personas[j] = temp;
      }
    }
  }
  return personas;
};

let arrAscendente = orderAscLegajo(personas);
console.log(arrAscendente);

console.log("*************************ASC******************************");

//b Desarrollar una función llamada orderDescLegajo que reciba por parámetro el array de personas y realice un ordenamiento de forma descendente

const orderDescLegajo = (personas) => {
  for (let i = 0; i < personas.length; i++) {
    let indice = i;
    for (let j = i + 1; j < personas.length; j++) {
      if (personas[j].legajo > personas[indice].legajo) {
        indice = j;
      }
    }
    if (indice !== i) {
      let temp = personas[i];
      personas[i] = personas[indice];
      personas[indice] = temp;
    }
  }
  return personas;
};

let arrDescendente = orderDescLegajo(personas);
console.log(arrDescendente);

console.log("*************************DESC******************************");

//c De qué forma se puede realizar los dos ítems anteriores en una sola función

const orderTotalLegajo = (personas, orden) => {
  for (let i = 0; i < personas.length; i++) {
    let indice = i;
    for (let j = i + 1; j < personas.length; j++) {
      if (
        (orden === "ASC" && personas[j].legajo < personas[indice].legajo) ||
        (orden === "DESC" && personas[j].legajo > personas[indice].legajo)
      ) {
        indice = j;
      }
    }
    if (indice !== i) {
      let temp = personas[i];
      personas[i] = personas[indice];
      personas[indice] = temp;
    }
  }
  return personas;
};

let ordenTotalAsc = orderTotalLegajo(personas, "ASC");
console.log(ordenTotalAsc);
let ordenTotalDesc = orderTotalLegajo(personas, "DESC");
console.log(ordenTotalDesc);

console.log(
  "*************************ORDENTOTAL******************************"
);

console.log("----------------------------------------");

//4.- Teniendo 3 arrays:

//fila1 = [4,9,2]
//fila2 = [3,5,7]
//fila3 = [8,1,6]

//Realiza las siguientes tareas:
//Crea una matriz con esta forma:
//[
//[4, 9, 2],
//[3, 5, 7],
//[8, 1, 6],
//];

let fila1 = [4, 9, 2];
let fila2 = [3, 5, 7];
let fila3 = [8, 1, 6];

const matriz = [fila1, fila2, fila3];

console.log(matriz);

console.log("*****************************************");

//Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por parámetro y retorne lo solicitado:
//a Función que reciba por parámetro la fila y retornar la suma de la misma:

const sumarFila = (matriz, numFila) => {
  let fila = matriz[numFila];
  let suma = 0;
  for (let i = 0; i < fila.length; i++) {
    suma += fila[i];
  }
  return suma;
};

let resultadoSuma = sumarFila(matriz, 1);
console.log(resultadoSuma);

console.log("*****************************************");

//b Función que retorne en un array la suma de las diagonales [15 , 15], sumando él centro las dos veces:

const sumarDiagonales = (matriz) => {
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;
  let n = matriz.length;
  for (let i = 0; i < n; i++) {
    diagonalPrincipal += matriz[i][i];
    diagonalSecundaria += matriz[i][n - i - 1];
  }

  let sumaCentro = 0;
  if (n % 2 !== 0) {
    let centro = matriz[(n - 1) / 2][(n - 1) / 2];
    sumaCentro = centro * 2;
  }

  let resultadoDiagonales = [
    diagonalPrincipal + sumaCentro,
    diagonalSecundaria + sumaCentro,
  ];
  return resultadoDiagonales;
};

let resultadoSumaDiagonales = sumarDiagonales(matriz);
console.log(resultadoSumaDiagonales);

console.log("*****************************************");

//c Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]

const arrayPares = (matriz) => {
  let pares = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] % 2 === 0) {
        pares.push(matriz[i][j]);
      }
    }
  }
  return pares;
};

let resultadoPares = arrayPares(matriz);
console.log(resultadoPares);

console.log("*****************************************");

//d Función que retorne en un array los elementos mayores a 5

const mayorCinco = (matriz) => {
  let mayores = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > 5) {
        mayores.push(matriz[i][j]);
      }
    }
  }
  return mayores;
};

let resultadoMayores = mayorCinco(matriz);
console.log(resultadoMayores);

console.log("*****************************************");

//e Función que retorne un objeto literal con dos propiedades pares: [4, 2, 8, 6]: array de pares; impares: [9, 3, 5, 7, 1]: array de impares

const obtenerParEImpar = (matriz) => {
  let pares = [];
  let impares = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] % 2 === 0) {
        pares.push(matriz[i][j]);
      } else {
        impares.push(matriz[i][j]);
      }
    }
  }
  return { pares, impares };
};

let paresEImpares = obtenerParEImpar(matriz);
console.log(paresEImpares);
