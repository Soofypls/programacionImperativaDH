/**Ejercicio 1 */
const ejercicioParcial1 = () => {
  let restarPares = (n1, n2) => {
    if (n1 % 2 !== 0 || n2 % 2 !== 0) {
      return console.log(
        "Lo siento, uno o mas parámetros no cumple con la condición de ser un número par"
      );
    } else {
      return n1 - n2;
    }
  };

  let resultadoRestarPares = restarPares(6, 8);
  console.log(resultadoRestarPares);
};
// ejercicioParcial1();

/**Ejercicio 2 */

const ejercicioParcial2 = () => {
  const controlAccesoRecital = (edad, ticket) => {
    if (edad >= 18 && ticket) {
      return true;
    } else if (edad <= 18 && ticket === 1) {
      return "Sólo puedes acceder con un adulto acompañante";
    } else ticket === 0;
    return false;
  };

  let accesoRecital = controlAccesoRecital(15, 1);

  console.log(accesoRecital);
};

// ejercicioParcial2();

/**Ejercicio 3 */

const ejercicioParcial3 = () => {
  let productos = [
    {
      producto: "remera",
      tipo: "indumentaria",
      precio: 2100,
    },
    {
      producto: "notebook",
      tipo: "tecnologia",
      precio: 200000,
    },
    {
      producto: "celular",
      tipo: "tecnologia",
      precio: 27000,
    },
    {
      producto: "protector solar",
      tipo: "cosmetica",
      precio: 2500,
    },
    {
      producto: "pantalon",
      tipo: "indumentaria",
      precio: 7500,
    },
    {
      producto: "tablet",
      tipo: "tecnologia",
      precio: 60000,
    },
  ];

  const categoriaProductos = (array) => {
    let filtroDeProductos = [];

    for (let i = 0; i < array.length; i++) {
      let productos = array[i];
      if (productos.tipo === "tecnologia" && productos.precio >= 50000) {
        filtroDeProductos.push(array[i]);
      }
    }

    return filtroDeProductos;
  };

  let filtroDeProductos = categoriaProductos(productos);
  console.log(filtroDeProductos);
};

// ejercicioParcial3();
