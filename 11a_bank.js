/**
 * Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias).

// let num = [1, 15, 20]
//     for (let i = 0; i<num.length; i++){
//         return num[i];
//     }
// console.log(num[i]);

function goodPerformance(){
  console.time("good");
  let unArray = obje.unArray;
  for (let i=0, longitud = unArray.length; i<longitud; i++){
      unArray[i] = "Hola";
  }
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

let exerciceBankOne = () =>{

let banco = {
  clientes: arrayCuentas,

  consultarCliente: function (nombreDelTitular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombreDelTitular) {
        return this.clientes[i];
      }
    }
  },

  deposito: function (nombre, cantidad) {
    let clienteEncontrado = this.consultarCliente(nombre);
    clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos + cantidad;
    // clienteEncontrado += cantidad;
    console.log(
      `Deposito realizado, su nuevo saldo es de $${clienteEncontrado.saldoEnPesos}`
    );
  },

  extraccion: function (nombre, cantidad) {
    let clienteEncontrado = this.consultarCliente(nombre);

    if (clienteEncontrado.saldoEnPesos >= cantidad) {
      clienteEncontrado.saldoEnPesos -= cantidad;
      console.log(`Extracción realizada correctamente, su nuevo saldo es de ${clienteEncontrado.saldoEnPesos}`);
    } else {console.log("Su saldo es insuficiente");
  }
}
}

console.log(banco.deposito("Jarret Lafuente", 100000));
console.log(banco.extraccion("Jarret Lafuente", 150000));

}
// exerciceBankOne();


/** Object for bank problem, try #2 
 * 
*/
// let exerciceBankTwo = () =>{


let banco = {
  clientes : arrayCuentas,
  consultarCliente: function(nombreDelTitular){
  }
}

for (let i = 0; i < banco.clientes.length; i++) {
  let clienteEncontrado = banco.consultarCliente(nombreDelTitular);
  console.log(clienteEncontrado(nombreDelTitular));
  
}



//   // Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);


// }
// exerciceBankTwo();
















