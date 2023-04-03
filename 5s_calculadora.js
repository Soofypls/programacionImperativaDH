const prompt = require("prompt-sync")({ sigint: true });


const pasarStrANumber=()=>{
function toNumber(str) {
  return Number(str) || 0;
}

};
// pasarStrANumber();

  // Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.


const ejercicioFuncionSumar=()=>{

let pSum = prompt("Ingresa el primer digito a sumar: ");
let pSum2 = prompt("Ingresa el segundo digito a sumar: ");

pSum = toNumber(pSum);
pSum2 = toNumber(pSum2);

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

let suma = sumar(pSum, pSum2);
console.log(suma);

};
// ejercicioFuncionSumar();


const ejercicioFuncionRestar=()=>{

// Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
let pRes = prompt("Ingresa el primer digito a restar: ");
let pRes2 = prompt("Ingresa el segundo digito a restar: ");

pRes = toNumber(pRes);
pRes2 = toNumber(pRes2);

function restar(a, b) {
  let resultado = a - b;
  return resultado;
}

let resta = restar(pRes, pRes2);
console.log(resta);


};
// ejercicioFuncionRestar();

const ejercicioFuncionMultiplicar=()=>{


// Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.

let pMul = prompt("Ingresa el primer digito a multiplicar: ");
let pMul2 = prompt("Ingresa el segundo digito a  multiplicar: ");

pMul = toNumber(pMul);
pMul2 = toNumber(pMul2);

function multiplicar(a, b) {
  let resultado = a * b;
  return resultado;
}

let multiplicacion = multiplicar(pMul, pMul2);
console.log(multiplicacion);

};
// ejercicioFuncionMultiplicar();


const ejercicioFuncionDividir =()=>{


// 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo.

let pDiv = prompt("Ingresa el primer digito a dividir: ");
let pDiv2 = prompt("Ingresa el segundo digito a  dividir: ");

pDiv = toNumber(pDiv);
pDiv2 = toNumber(pDiv2);

function dividir(a, b) {
  let resultado = a / b;
  return resultado;
}

let division = dividir (pDiv, pDiv2);
console.log(division);

};
// ejercicioFuncionDividir();

const ejercicioFuncionNumeroAlCuadraro =()=>{



// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

let numeroCuadrado = prompt("Ingresa el número para elevar al cuadrado: ");

numeroCuadrado = toNumber(numeroCuadrado);

function alCuadrado (numeroCuadrado){
    let resultado=multiplicar(numeroCuadrado,numeroCuadrado);
    return resultado;
}

let cuadrado = alCuadrado (numeroCuadrado);
console.log(cuadrado);

};
// ejercicioFuncionNumeroAlCuadraro();

const ejercicioFuncionPromediar=()=>{



// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

let parametroPromedio = prompt("Ingresa el primer número para promediar: ");
let parametroPromedio2 = prompt("Ingresa el primer número para promediar: ");
let parametroPromedio3 = prompt("Ingresa el primer número para promediar: ");

// numeroCuadrado = toNumber(numeroCuadrado);

parametroPromedio = toNumber(parametroPromedio);
parametroPromedio2 = toNumber(parametroPromedio2);
parametroPromedio3 = toNumber(parametroPromedio3);

function calcularPromedio (parametroPromedio, parametroPromedio2, parametroPromedio3){
    let resultado = sumar(parametroPromedio, parametroPromedio2);
    resultado = sumar(resultado, parametroPromedio3)/3;
    return resultado;
}

// function calcuPromedio () {
//   let acum = 0;
//   for(let i=0; i < arguments.length; i++) {
//     acum = acum + arguments[i];
//   }
//   return acum / arguments.length;
// }

// calcuPromedio(10,15,30);

let promedio = calcularPromedio(parametroPromedio,parametroPromedio2,parametroPromedio3);
console.log(promedio);



};
// ejercicioFuncionPromediar();


// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular.
// Deberá retornar el x%  total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

const ejercicioCalcularPorcentaje=()=>{


let numeroTotal = prompt("Ingresa el número del cual quiere calcular porcentaje: ");
numeroTotal = toNumber(numeroTotal);

const calcularPorcentaje = (numeroTotal, porcentaje) => {

  let resultado;

  // if (porcentaje% 1 != 0) {  
  //    // let porcentaje = (500 * 50) / 100; 
  //   resultado = multiplicar(numeroTotal, porcentaje);
  //   resultado = dividir(resultado, 100);
  
  // } else {
  //   // let porcentaje2 = 500 * 0.5
  //   resultado = multiplicar(numeroTotal, porcentaje);
     
  // }
    // let divPor=dividir(porcentaje)/100;
    // let resultado=multiplicar(numeroTotal*divPor);
    // return `El porcentaje total es de: ${resultado}`;

  // let porcentaje = (500 * 50) / 100; 
    resultado = multiplicar(numeroTotal, porcentaje);
    resultado = dividir(resultado, 100);
  return resultado
} 

let porcentaje;

do {
  porcentaje = prompt("Ingresa el porcentaje, en número, que quiere sea calculado: ");
  porcentaje = toNumber(porcentaje);
} while (porcentaje<0 || porcentaje>100);

let porcentajeFinal = calcularPorcentaje(numeroTotal, porcentaje);
console.log(porcentajeFinal);

};
// ejercicioCalcularPorcentaje();

const ejercicioFuncionMultiplicarPar=()=>{



let multiplicarPar = (n1, n2)=>{
  let resultado = n1 * n2
  if (resultado % 2 === 0){
    return "es par"
  } else {
    return "es impar"
  }
}

let res = multiplicarPar(3,4)
console.log(res);



};
// ejercicioFuncionMultiplicarPar();

// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.


