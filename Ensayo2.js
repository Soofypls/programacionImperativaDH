const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const incremental = (array) => {

    let posicion = 0;

  do {
    // const incremento = array[posicion] + 1;
    // array[posicion] = incremento;

    array[posicion] = array[posicion] + 1;

    posicion = posicion + 1;
  } while (posicion< array.length); //10

    return array;
};

let x = incremental(edades);
console.log(x);
/**
 * 
 * posicion // 0
 * incremento // 12
 * posicion // 1
 * 
 * posicion // 1
 * incremento // 13
 * posicion // 2
 * 
 * posicion // 2
 * inccremento // 16
 * posicion // 3
 * 
 * posicion // 3
 * incremento // 19
 * posicion // 4
 * 
 * posicion // 8
 * incremento // 19
 * posicion // 9
 * 
 * posicion // 9
 * incremento //  6
 * posicion // 10
 * 
 * 
 * 
 * 
 * 
 */





