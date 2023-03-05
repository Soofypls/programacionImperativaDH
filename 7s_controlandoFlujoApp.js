const prompt = require("prompt-sync")({ sigint: true });

// EJ #1 - Agregá caminos - Acceso a la discoteca según edades

const puedePasar = (edad) => {

  if (edad < 1) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    return
  }

  let esImpar = (edad%2) !== 0;

  if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad === 21) {
    console.log(
      "Bienvenido, felicidades por alcanzar la mayoría de edad, ya puedes ingresar y beber alcohol."
    );
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }
 

if (esImpar) {
  console.log("¿Sabías que tu edad es impar?");
};

};

puedePasar(21);

// Modificar:
// 1. Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
// if (edad >= 0) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.");
// }
// //2. Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
// if (edad = 21) {
//     console.log("Bienvenido, felicidades por alcanzar la mayoría de edad, ya puedes ingresar y beber alcohol.");
// }
// // 3. Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".
// if (edad = edad%1) {
//     console.log("¿Sabías que tu edad es impar?");
// }

// EJ #2 Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.

// Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.


let totalAPagar = (vehiculo, litrosConsumidos) =>{
let calculo=vehiculo*litrosConsumidos
let adicionalMinLt = calculo+50;
let adicionalMaxLt = calculo+25;

  let vehiculo=(coche, moto, autobus){
    if (vehiculo=coche)
      console.log(`Su total a pagar es de ${calculo}`);
    } else if (vehiculo=moto){
      console.log(`Su total a pagar es de ${calculo}`);
      } else {
     console.log(`Su total a pagar es de ${calculo}`)
      };
    }

    if (litrosConsumidos>0<=25){
      console.log(`Su total a pagar es de ${adicionalMinLt}`);
    
  } else {
    console.log(`Su total a pagar es de ${adicionalMaxLt}`);}

  }
  
      
      }

let pagoGas = totalAPagar
totalAPagar(coche, 20);


