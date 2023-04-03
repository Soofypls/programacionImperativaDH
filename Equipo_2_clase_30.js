//En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [
  123, 21, 345, 213, 7544, 2353, 43, 2345, 678, 8567, 456, 345, 2345, 1854, 35,
];

const ordenarLikes = (arr) => {
  // let cajita
  let aux = undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return [arr[0], arr[1], arr[2], arr[arr.length - 1]];
};

let resultado = ordenarLikes(likes);
console.table(resultado);
console.log("---------------");

//El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array. a) Ordenar por temperatura mínima de menor a mayor. b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = [
  {
    dia: 1,
    mes: 1,
    temperaturaMaxima: 31,
    temperaturaMinima: 27,
  },
  {
    dia: 2,
    mes: 1,
    temperaturaMaxima: 30,
    temperaturaMinima: 21,
  },
  {
    dia: 3,
    mes: 1,
    temperaturaMaxima: 35,
    temperaturaMinima: 25,
  },
];

const ordenarTemperatura = (arr, instruccion) => {
  let aux;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (instruccion === "minima") {
        if (arr[j].temperaturaMinima > arr[j + 1].temperaturaMinima) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      } else if (instruccion === "maxima") {
        if (arr[j].temperaturaMaxima < arr[j + 1].temperaturaMaxima) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
  }
};

ordenarTemperatura(temperatura, "maxima");
console.table(temperatura);

ordenarTemperatura(temperatura, "minima");
console.table(temperatura);
