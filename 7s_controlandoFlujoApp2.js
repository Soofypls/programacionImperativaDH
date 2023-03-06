const prompt = require("prompt-sync")({ sigint: true });

// // EJ #1 - Agregá caminos - Acceso a la discoteca según edades

// const puedePasar = (edad) => {

//   if (edad < 1) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.");
//     return
//   }

//   let esImpar = (edad%2) !== 0;

//   if (edad < 18) {
//     console.log("No puede pasar al bar.");
//   } else if (edad < 21) {
//     console.log("Puede pasar al bar, pero no puede tomar alcohol.");
//   } else if (edad === 21) {
//     console.log(
//       "Bienvenido, felicidades por alcanzar la mayoría de edad, ya puedes ingresar y beber alcohol."
//     );
//   } else {
//     console.log("Puede pasar al bar y tomar alcohol.");
//   }

// if (esImpar) {
//   console.log("¿Sabías que tu edad es impar?");
// };

// };

// // DECLARACION DE FUNCION // puedePasar(21);

// // Modificar:
// // 1. Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
// // if (edad >= 0) {
// //     console.log("Error, edad inválida. Por favor ingrese un número válido.");
// // }
// // //2. Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
// // if (edad = 21) {
// //     console.log("Bienvenido, felicidades por alcanzar la mayoría de edad, ya puedes ingresar y beber alcohol.");
// // }
// // // 3. Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".
// // if (edad = edad%1) {
// //     console.log("¿Sabías que tu edad es impar?");
// // }

// // EJ #2 Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.

// // Si el vehículo es “coche”, el precio por litro es de $86.
// // ● Si es “moto”, ha de ser $70.
// // ● Si es “autobús”, ha de ser $55.
// // ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// // ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

// //DECLARACION DE VARIABLES
// let vehiculo;
// let litrosConsumidos;

// let calculo;

// do {
//   vehiculo = prompt("Indique el tipo de vehiculo que posee (moto, coche, autobus): ");
// } while (vehiculo !== "moto" && vehiculo !== "coche" && vehiculo !=="autobus");

// do {
//   litrosConsumidos = prompt("Indique la cantidad de litros consumidos por su vehiculo: ")
//   // litrosConsumidos = toNumber(litrosConsumidos);
// } while (litrosConsumidos<0);

// let totalAPagar = (vehiculo, litrosConsumidos) => {
//   let precio;
//   let adicional;

//   if (litrosConsumidos > 0 && litrosConsumidos <=25){
//     adicional=50;
//   } else {
//     adicional=25;
//   }

//   if (vehiculo==="coche"){
//     precio=86;
//     // console.log(`El monto a pagar por el coche corresponde a: ${calculo}`);
//   } else if (vehiculo === "moto"){
//     precio=70;
//     // console.log(`El monto a pagar por la moto corresponde a: ${calculo}`);
//   } else if (vehiculo==="autobus"){
//     precio=55;
//     // console.log(`El monto a pagar por el autobus corresponde a: ${calculo}`);
//   };

//   return precio + adicional;
// }

// calculo=totalAPagar(vehiculo, litrosConsumidos);

// console.log(`El monto a pagar corresponde a: ${calculo}`)

// EJ#3   Local de sandwish

let hamburguesaBase;
let tipoPan;
let quiereAdicional;
let adicionales = [
  {
    nombre: "queso",
    precio: 20,
  },
  {
    nombre: "tomate",
    precio: 15,
  },
  {
    nombre: "lechuga",
    precio: 10,
  },
  {
    nombre: "cebolla",
    precio: 15,
  },
  {
    nombre: "mostaza",
    precio: 5,
  },
  {
    nombre: "mayonesa",
    precio: 5,
  },
  {
    nombre: "bacon",
    precio: 30,
  },
];

let adicionalesAgregados = [];

do {
  hamburguesaBase = prompt(
    "Indique el tipo de hamburguesa requerida (pollo, carne, veggie): "
  );
} while (
  hamburguesaBase !== "carne" &&
  hamburguesaBase !== "pollo" &&
  hamburguesaBase !== "veggie"
);

do {
  tipoPan = prompt(
    "Indique el tipo de pan requerido (blanco, negro, s/gluten): "
  );
} while (tipoPan !== "blanco" && tipoPan !== "negro" && tipoPan !== "s/gluten");

do {
  quiereAdicional = prompt("¿Desea incluir adicionales (si/no): ");
} while (quiereAdicional !== "si" && quiereAdicional !== "no");

  for (let i = 0; quiereAdicional === "si" && i < adicionales.length; i++) {
    let esAgregado;
    let adicional = adicionales[i];

    do {
      esAgregado = prompt(
        `¿Quiere agregar ${adicional.nombre} por ${adicional.precio} (si/no)?: `
      );
    } while (esAgregado !== "si" && esAgregado !== "no");

    if (esAgregado === "si") {
      adicionalesAgregados.push(adicional);
    }
  }

let localSandwish = (hamburguesaBase, tipoPan, adicionalesAgregados) => {
  let precioHamburguesa;
  let precioPan;
  let precioAdicional = 0;

  if (hamburguesaBase === "pollo") {
    precioHamburguesa = 150;
  } else if (hamburguesaBase === "carne") {
    precioHamburguesa = 200;
  } else if (hamburguesaBase === "veggie") {
    precioHamburguesa = 100;
  }

  if (tipoPan === "blanco") {
    precioPan = 50;
  } else if (tipoPan === "negro") {
    precioPan = 60;
  } else if (tipoPan === "s/gluten") {
    precioPan = 75;
  }

  for (let i = 0; i < adicionalesAgregados.length; i++) {
    let adicional = adicionalesAgregados[i];
    precioAdicional += adicional.precio;
    // if(adicional ==="queso"){
    //   precioAdicional +=20;
    // } else if (adicional ==="tomate"){
    //   precioAdicional += 15;
    // } else if (adicional ==="lechuga"){
    //   precioAdicional += 10;
    // } else if (adicional ==="cebolla"){
    //   precioAdicional += 15;
    // } else if (adicional ==="mayonesa"){
    //   precioAdicional += 5;
    // } else if (adicional ==="mostaza"){
    //   precioAdicional += 5;
    // } else if (adicional ==="bacon"){
    //   precioAdicional += 30;
    // }
  }

  return precioHamburguesa + precioPan + precioAdicional;
};

let precioFinal = localSandwish(hamburguesaBase, tipoPan, adicionalesAgregados);
console.log(`El monto a pagar corresponde a: ${precioFinal}`);
