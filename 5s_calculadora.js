const prompt = require("prompt-sync")({ sigint: true });

function toNumber(str) {
  return Number(str) || 0;}


  // Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.

let pSum = prompt("Ingresa el primer digito a sumar: ");
let pSum2 = prompt("Ingresa el segundo digito a sumar: ");

pSum = toNumber(pSum);
pSum2 = toNumber(pSum2);

function sumar(a, b, c) {
  let resultado = a + b + c;
  return resultado;
}

let suma = sumar(pSum, pSum2);
console.log(suma);

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

// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

let parametroPromedio = prompt("Ingresa el primer número para promediar: ");
let parametroPromedio2 = prompt("Ingresa el primer número para promediar: ");
let parametroPromedio3 = prompt("Ingresa el primer número para promediar: ");

// numeroCuadrado = toNumber(numeroCuadrado);

function promedio (parametroPromedio, parametroPromedio2, parametroPromedio3){
    let sumaPromedio= sumar (parametroPromedio, parametroPromedio2, parametroPromedio3);
    let resultado=sumaPromedio/3;
return resultado;
}

let calcularPromedio = promedio(parametroPromedio, parametroPromedio2, parametroPromedio3);
console.log(calcularPromedio);
// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular.
// Deberá retornar el x%  total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.

