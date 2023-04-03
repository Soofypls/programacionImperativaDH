/**
 * Desarrollar una función que ordene internamente de forma ascendente las edades,
 * la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado
 * como él siguiente.
 */

const ejercicio1 = () => {
  const edades = [33, 27, 34, 30, 34, 25];

  const DESC = (array) => {
    let auxiliar;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] < array[j + 1]) {
          auxiliar = array[j];

          array[j] = array[j + 1];
          array[j + 1] = auxiliar;
        }
      }
    }
  };

  DESC(edades);
  console.log(edades);
};

// ejercicio1();

/**
 * Desarrollar una función que ordene internamente de forma descendente las edades,
 * la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
 */
const ejercicio2 = () => {
  const edades = [33, 27, 34, 30, 34, 25];

  const ASC = (array) => {
    let auxiliar;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          auxiliar = array[j];

          array[j] = array[j + 1];
          array[j + 1] = auxiliar;
        }
      }
    }
  };
  ASC(edades);
  console.log(edades);
};
// ejercicio2();

/**
 * ¿Cómo pudieras ordenar el array anterior, alfabéticamente?
 */
const ejercicio3 = () => {
  const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

  const ABC = (array) => {
    let auxiliar;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          auxiliar = array[j];

          array[j] = array[j + 1];
          array[j + 1] = auxiliar;
        }
      }
    }
  };
  ABC(letras);
  console.log(letras);
};

// ejercicio3();

/**
 * 
Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, 
la misma deberá retornar él array ordenado .
 */
const ejercicio4 = () => {
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
      estaHabilitada: false,
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

  const ordenarPorSaldo = (array) => {
    let aux;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j].saldo > array[j + 1].saldo) {
          aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  };

  ordenarPorSaldo(arrayCuentas);
  console.table(arrayCuentas);
};

ejercicio4();

/**
 * Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta,
 * la misma deberá retornar él array ordenado
 */
const ejercicio5 = () => {
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
      estaHabilitada: false,
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

  const ordenarPorEdad = (array) => {
    let aux;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j].edad > array[j + 1].edad) {
          aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  };

  ordenarPorEdad(arrayCuentas);
  console.table(arrayCuentas);
};

ejercicio5();
