/* 

A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.

*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const edadesMenores = (array) => {
  let menores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      menores.push(array[i]);
    }
  }

  return menores;
};

let menores18 = edadesMenores(edades);
console.log(menores18);

const edadesMayores = (array) => {
  let mayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 18) {
      mayores.push(array[i]);
    }
  }

  return mayores;
};

let mayores18 = edadesMayores(edades);
console.log(mayores18);

const edades18 = (array) => {
  let tienen18 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 18) {
      tienen18.push(array[i]);
    }
  }

  return tienen18;
};

let personas18 = edades18(edades);
console.log(personas18);

const obtenerMenor = (array) => {
  let menor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
    }
  }

  return menor;
};

let elMenor = obtenerMenor(edades);
console.log(elMenor);

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

const promedioEdades = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma / array.length;
};

let promedio = promedioEdades(edades);
console.log(promedio);

const incrementarEdades = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
};

incrementarEdades(edades);
console.log(edades);

console.log("------------------------------");

/**
 
Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. 
A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada

Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un array con las cuentas habilitadas.
Obtener un array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.

 */

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

const cuentasMenores = (array) => {
  let menores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular < 30) {
      menores.push(array[i]);
    }
  }

  return menores;
};

let menoresCuentas = cuentasMenores(arrayCuentas);
console.log(menoresCuentas);

console.log("------------------");

const cuentasMayores = (array) => {
  let mayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular >= 30) {
      mayores.push(array[i]);
    }
  }

  return mayores;
};

let mayoresCuentas = cuentasMayores(arrayCuentas);
console.log(mayoresCuentas);

console.log("------------------");

const cuentasMenoresIguales = (array) => {
  let menores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular <= 30) {
      menores.push(array[i]);
    }
  }

  return menores;
};

let menoresIgualesCuentas = cuentasMenoresIguales(arrayCuentas);
console.log(menoresIgualesCuentas);

console.log("------------------");

const obtenerMenorCuenta = (array) => {
  let menor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (menor.edadTitular > array[i].edadTitular) {
      menor = array[i];
    }
  }

  return menor;
};

let menorCuenta = obtenerMenorCuenta(arrayCuentas);
console.log(menorCuenta);
