/**
 * Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias).

// let num = [1, 15, 20]
//     for (let i = 0; i<num.length; i++){
//         return num[i];
//     }
// console.log(num[i]);
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



// let exerciceOneBank = () =>{


let banco = {
    
    clientes : arrayCuentas,

    consultarCliente : function(nombreDelTitular){
        for(let i = 0; i < this.clientes.length; i++){
            if (this.clientes[i].titularCuenta === nombreDelTitular){
                return this.clientes[i] }
        }
    },

    deposito : function(nombre, cantidad){
        let clienteEncontrado = this.consultarCliente(nombre);
        clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos + cantidad;
        // clienteEncontrado += cantidad;
        console.log (`Deposito realizado, su nuevo saldo es de $${clienteEncontrado.saldoEnPesos}`);
        }

};  

banco.deposito("Ansel Ardley", 10000);
console.log(banco.consultarCliente("Ansel Ardley")); 







    
// // }
