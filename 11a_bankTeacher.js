/**
 * Información de cuentas clientes para ejercicio
 */

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

/**
2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
 * 
 */

let bankTeacher = () => {
  let banco = {
    clientes: arrayCuentas,
    // Esta función encuentra el objeto cliente del titular
    consultarCliente: function (nombreDelTitular) {
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === nombreDelTitular) {
          return this.clientes[i];
        }
      }
    },

    // Esta funcion realiza un deposito a la cuenta del titular
    deposito: function (nombre, cantidad) {
      let objetoCliente = this.consultarCliente(nombre);
      // objetoCliente.saldoEnPesos = objetoCliente.saldoEnPesos + cantidad
      objetoCliente.saldoEnPesos += cantidad;

      console.log(
        `Depósito realizado, su nuevo saldo es: ${objetoCliente.saldoEnPesos}`
      );
    },
  };

  banco.deposito("Jacki Shurmer", 100000);

  console.log(banco.consultarCliente("Jacki Shurmer"));
};

// bankTeacher();

/**
 * Bank problem. Try 1, myself
 * 2. crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” de array
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un  método llamado extracción que recibirá dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
 */

let bankSoofy = () => {
  // let unArray = obje.unArray;
  //   for (let i=0, longitud = unArray.length; i<longitud; i++){
  //       unArray[i] = "Hola";
  //   }

  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
      // for (let i = 0; i < this.clientes.length; i++) {
      //     return this.clientes[i]
      // }

      let unArray = this.clientes;
      for (let i = 0, longitud = unArray.length; i < longitud; i++) {
        return unArray[i];
      }

      //
    },

    deposito: function (titular, cantidad) {
      let depositoCliente = this.consultarCliente(titular);
      depositoCliente.saldoEnPesos = clienteEncontrado.saldoEnPesos + cantidad;

      console.log(
        `Depósito realizado, su nuevo saldo es: ${depositoCliente.saldoEnPesos}`
      );
    },

    extraccion: function (titular, extraccion) {
      let extraccionCliente = this.consultarCliente(titular);
      extraccionCliente.saldoEnPesos =
        clienteEncontrado.saldoEnPesos - extraccion;

      if (extraccionCliente.saldoEnPesos < 0) {
        console.log("Fondos insuficientes");
      } else {
        console.log(
          `Extraccion realizada correctamente, su nuevo saldo es ${extraccionCliente.saldoEnPesos}`
        );
      }
    },
  };

  let clienteEncontrado = banco.consultarCliente();

  banco.extraccion("Abigael Natte", 27771);
  banco.deposito("Abigael Natte", 287771);
  banco.extraccion("Abigael Natte", 500000);

  console.log(banco.consultarCliente("Abigael Natte"));
};
// bankSoofy();

/**
 * /**
 * Bank problem. Try 1, myself
 * 2. crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” de array
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un  método llamado extracción que recibirá dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
 */

let bankSoofyDos = () => {
  // let unArray = obje.unArray;
  //   for (let i=0, longitud = unArray.length; i<longitud; i++){
  //       unArray[i] = "Hola";
  //   }

  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
      let unArray = this.clientes;
      for (let i = 0, longitud = unArray.length; i < longitud; i++) {
        if (unArray[i].titularCuenta === titular) {
          return unArray[i];
        }
      }
    },

    deposito: function (titular, cantidad) {
      let nuevoSaldo = this.consultarCliente(titular).saldoEnPesos + cantidad;
      console.log(`Deposito realizado, su nuevo saldo es de: $ ${nuevoSaldo}`);
    },

    extraccion: function (titular, monto) {
      let saldoRestante = this.consultarCliente(titular);
      saldoRestante.saldoEnPesos -= monto;
      console.log(
        `Extraccion realizada correctamente, su nuevo saldo es de: $ ${saldoRestante.saldoEnPesos}`
      );
    },
  };
  console.log(banco.consultarCliente("Ansel Ardley"));
  console.log(banco.deposito("Ansel Ardley", 100000));
  console.log(banco.extraccion("Ansel Ardley", 0));
};

/**
 * /**
 * /**
 * Bank problem. Try 1, myself
 * 2. crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” de array
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un  método llamado extracción que recibirá dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
 */

// let bankSoofyTres =()=>{

let banco = {
  clientes: arrayCuentas,

  consultarCliente: function (nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombre) {
        return this.clientes[i];
      }
    }
  },

  deposito : function(titular, cantidad){
    let clienteEncontrado = this.consultarCliente(titular)
    clienteEncontrado.saldoEnPesos += cantidad;
      return console.log(`Deposito realizado, su nuevo saldo es de: ${clienteEncontrado.saldoEnPesos}`);
    },

    extraccion : function(titular, cantidad){
      let extraccion = this.consultarCliente(titular)
      extraccion.saldoEnPesos -= cantidad;
      if(extraccion.saldoEnPesos<cantidad === true){
        return console.log("Fondos insuficientes");
      } else {
console.log(`Extraccion realizada con éxito, su nuevo saldo es de ${extraccion.saldoEnPesos}`);
      }
      
    }

  };

banco.deposito("Ansel Ardley", 100000);
banco.extraccion("Ansel Ardley", 50000);

// }
