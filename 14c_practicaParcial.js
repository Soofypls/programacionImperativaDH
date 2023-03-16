/**
 * 
 * A partir de el siguiente array de edades nos solicitan realizar lo siguiente:



Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.

 */

/**array
 *  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
 */

const ejercicioEdadesMenor18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menoresEdad = (array) => {
    let menores = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        menores.push(array[i]);
      }
    }

    return menores;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_1();

const ejercicioEdadesMenor18_2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menorEdad = (array) => {
    let menor18 = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        menor18.push(array[i]);
      }
    }
    return menor18;
  };

  let esMenor = menorEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_2();

const ejercicioEdadesMenor18_3 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menoresEdad = (array) => {
    let edad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        edad.push(array[i]);
      }
    }
    return edad;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_3();

const ejercicioEdadesMenor18_4 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
  menoresEdad = (array) => {
    let edadDelMenor = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        edadDelMenor.push(array[i]);
      }
    }

    return edadDelMenor;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_4();

const ejercicioEdadesMayorIgual18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const mayorOigual18 = (array) => {
    let mayoriaEdad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 18) {
        mayoriaEdad.push(array[i]);
      }
    }
    return mayoriaEdad;
  };

  let esMayor = mayorOigual18(edades);
  console.log(esMayor);
};
// ejercicioEdadesMayorIgual18_1();

const ejercicioEdadesIgual18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const edadIgual18 = (array) => {
    let edad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 18) {
        edad.push(array[i]);
      }
    }
    return edad;
  };

  let resultado = edadIgual18(edades);
  console.log(resultado);
};
// ejercicioEdadesIgual18_1();

const ejercicioEdadesIgual18_2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const edad = (array) => {
    let igualEdad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 18) {
        igualEdad.push(array[i]);
      }
    }
    return igualEdad;
  };

  let resultado = edad(edades);
  console.log(resultado);
};
// ejercicioEdadesIgual18_2();

const ejercicioObtenerMayor1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const obtenerMayor = (array) => {
    let mayor = array[0];

    for (let i = 0; i < array.length; i++) {
      if (mayor < array[i]) {
        mayor = array[i];
      }
    }

    return mayor;
  };

  let elMayor = obtenerMayor(edades);
  console.log(elMayor);
};

// ejercicioObtenerMayor1();

const ejercicioObtenerMayor2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const numeroMayor = (array) => {
    let esMayor = [];
    for (let i = 0; i < array.length; i++) {
      if (edades(array[i]) > edades) {
        esMayor.push(array[i]);
      }
      return esMayor;
    }
  };

  let obtenerMayor = numeroMayor(edades);
  console.log(obtenerMayor);
};
// ejercicioObtenerMayor2();

const ejercicioObtenerMayor3 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const obtenerMayor = (array) => {
  let esElMayor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (esElMayor < array[i]) {
      esElMayor = array[i];
    }
  }
  return esElMayor;
};

let edadMAyor = obtenerMayor(edades);
console.log(edadMAyor);

};

// ejercicioObtenerMayor3();

// const ejercicioObtenerMayor4  =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// };

// ejercicioObtenerMayor4();