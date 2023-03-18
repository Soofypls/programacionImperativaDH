/**
 * 
 * A partir de el siguiente array de edades nos solicitan realizar lo siguiente:



Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.

 */

/**array
 *  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
 */



const bateriaEjerciciosMenorA18=()=>{



const ejercicioEdadesMenor18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menoresEdad = (array) => {
    let menores = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        menores.push(array[i]);
      }
    }

    return menores;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_1();

const ejercicioEdadesMenor18_2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menorEdad = (array) => {
    let menor18 = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        menor18.push(array[i]);
      }
    }
    return menor18;
  };

  let esMenor = menorEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_2();

const ejercicioEdadesMenor18_3 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const menoresEdad = (array) => {
    let edad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) { 
         edad.push(array[i]);
      }
    }
    return edad;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_3();

const ejercicioEdadesMenor18_4 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
  menoresEdad = (array) => {
    let edadDelMenor = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 18) {
        edadDelMenor.push(array[i]);
      }
    }

    return edadDelMenor;
  };

  let esMenor = menoresEdad(edades);
  console.log(esMenor);
};
// ejercicioEdadesMenor18_4();

};
const bateriaEjerciciosMayorIgualA18=()=>{


const ejercicioEdadesMayorIgual18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const mayorOigual18 = (array) => {
    let mayoriaEdad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 18) {
        mayoriaEdad.push(array[i]);
      }
    }
    return mayoriaEdad;
  };

  let esMayor = mayorOigual18(edades);
  console.log(esMayor);
};
// ejercicioEdadesMayorIgual18_1();



const ejercicioEdadesIgual18_1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const edadIgual18 = (array) => {
    let edad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 18) {
        edad.push(array[i]);
      }
    }
    return edad;
  };

  let resultado = edadIgual18(edades);
  console.log(resultado);
};
// ejercicioEdadesIgual18_1();

const ejercicioEdadesIgual18_2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const edad = (array) => {
    let igualEdad = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 18) {
        igualEdad.push(array[i]);
      }
    }
    return igualEdad;
  };

  let resultado = edad(edades);
  console.log(resultado);
};
// ejercicioEdadesIgual18_2();

};
const bateriaEjerciciosObtenerMayor=()=>{


const ejercicioObtenerMayor1 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

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
};

// ejercicioObtenerMayor1();

const ejercicioObtenerMayor2 = () => {
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const numeroMayor = (array) => {
    let esMayor = [];
    for (let i = 0; i < array.length; i++) {
      if (edades(array[i]) > edades) {
        esMayor.push(array[i]);
      }
      return esMayor;
    }
  };

  let obtenerMayor = numeroMayor(edades);
  console.log(obtenerMayor);
};
// ejercicioObtenerMayor2();

const ejercicioObtenerMayor3 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const obtenerMayor = (array) => {
  let esElMayor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (esElMayor < array[i]) {
      esElMayor = array[i];
    }
  }
  return esElMayor;
};

let edadMAyor = obtenerMayor(edades);
console.log(edadMAyor);

};

// ejercicioObtenerMayor3();

const ejercicioObtenerMayor4  =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const obtenerMayor=(array)=>{
let esElMayor = array[0];

for (let i = 0; i < array.length; i++) {
    if(esElMayor<array[i]){
        esElMayor=array[i];
    };

};
return esElMayor;
};

let mayorNumero = obtenerMayor(edades);
console.log(mayorNumero);
};

// ejercicioObtenerMayor4();
};
const bateriaEjerciciosObtenerMenor=()=>{



const ejercicioObtenerMenor1 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const obtenerMenor =(array)=>{

    let esMenor = array[0];

    for (let i = 0; i < array.length; i++) {
        if(esMenor>array[i]){
            esMenor=array[i]
        };
        
    };
return esMenor

};
let esElMenor = obtenerMenor(edades);
console.log(esElMenor);


};
// ejercicioObtenerMenor1();

const ejercicioObtenerMenor2 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const obtenerMenor=(array)=>{

    let esMenor = array[0];

    for (let i = 0; i < array.length; i++) {
      if(esMenor<array[i]){
        esMenor=array[i]
      };
      
    };
    return esMenor;
};

let menorNumero = obtenerMenor(edades);
console.log(menorNumero);


};

// ejercicioObtenerMenor2();

};
const bateriaEjerciciosPromedioEdades =()=>{

const ejercicioPromedio1=()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


const promedioEdades=(array)=>{

let promedio = [0];
let suma = Array++
for (let i = 0; i < array.length; i++) {
    promedio.push(array[i]) 
};

return suma/array.length
};

let promedioFinal = promedioEdades(edades);
console.log(promedioFinal);
};
// ejercicioPromedio1();

const ejercicioPromedio2=()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const promedioEdades = (array) => {
    let suma = 0;
  
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
  
    return suma / array.length;
  };
  
  let promedio = promedioEdades(edades);
  console.log(promedio);

};
// ejercicioPromedio2();

const ejercicioPromedio3=()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const calcularPromedio =(array)=>{
let suma = 0;
for (let i = 0; i < array.length; i++) {
    suma += array[i];
};

return suma/array.length;

};

let promedio = calcularPromedio(edades);
console.log(promedio);

};
// ejercicioPromedio3();















};
const bateriaEjerciciosIncremento=()=>{

const ejercicioIncremento1=()=>{
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const incrementarEdades = (array) => {

    for (let i = 0; i < array.length; i++) {
      array[i] += 1;
    }
  };
  
  incrementarEdades(edades);
  console.log(edades);
  

};
// ejercicioIncremento1();

const ejercicioIncremento2 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const incremento =(array)=>{

    let edadIncrementada = [];
    for (let i = 0; i < array.length; i++) {
    edadIncrementada[i] += array[i]+1
  }
    return edadIncrementada;
};

let edad = edades(incremento);
console.log(edad);
};
// ejercicioIncremento2();                  

const ejercicioIncremento3 =()=>{                           // ¿Por que no devuelve nada?

  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
  
  const numeroIncrementado =(array)=>{

      for (let i = 0; i < array.length; i++) {
        array[i] +=1
      }
  };

  

numeroIncrementado(edades);
console.log(edades);

};

// ejercicioIncremento3();
const ejercicioIncremento4 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const incrementarEdad =(array)=>{

    for (let i = 0; i < array.length; i++) {
      array[i] += 1      
    }
}

incrementarEdad(edades);
console.log(edades);
};

// ejercicioIncremento4();

const ejercicioIncremento5 =()=>{

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const edadIncrementada =(array)=>{

  for (let i = 0; i < array.length; i++){
    array[i] += 1
  }
};

edadIncrementada(edades);
console.log(edades);


};

// ejercicioIncremento5();

const ejercicioIncremento6=()=>{
  const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

  const incrementoEdad =(array)=>{

for (let i = 0; i < array.length; i++) {
  array[i] += 1
  
}

  };

  incrementoEdad(edades);
  console.log(edades);


};
// ejercicioIncremento6();

};

/**
 * 
 * Deberás crear una función llamada loopDePares que reciba como parámetro un número y 
 * haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
 * En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, 
 * mostrará en la consola: “El número X es par”.
 * 
 */

const ejercicioLoopPares1 =()=>{

  const loopDePares =(numero)=> {
    for (let i = 0; i <= 100; i++) {
      if ((i + numero) % 2 === 0) {
        console.log(`El número ${numero + i} es par`);
      } else {
        console.log(i);
      }
    };
  };
console.log(loopDePares(10));

};

// ejercicioLoopPares1();

// const ejercicioLoopPares2 =();

const ejercicioPalindromo1 = () => {

  let palabra = "teamo";

  const palindrome=(str)=>{
    
    let izquierda = 0;
    let derecha = str.length -1;

    for (let i = 0; i < str.length; i++) {
      
      // console.log("izq: ", izquierda, "der: ", derecha);
      if(str[izquierda]!==str[derecha]){
        return false;
      }
      //  else {
      //   console.log("izq: ", str[izquierda], "der: ", str[derecha]);
      // }
    
      izquierda += 1;
      derecha -= 1;
    }

    return true;

  }

  let resultado = palindrome(palabra);
  if (resultado === true ) {
    console.log("Es palindrome");
    
  } else{
    console.log("No es palindrome");
  }

}

ejercicioPalindromo1();

/**
 * 
 * 
 * izquierda = 0;
 * derecha = 7;
 * str izq = r
 * str der = r
 * 
 * izquierda = 1;
 * derecha = 7;
 * str izq = e;
 * str der = e;
 * 
 * 
 * 
 */

const unObjeto = {

nombre : "Mocosito",
edad: 36,
metodo: function () {
let enamorados = "amor";
}

}

/**
 * un objeto que teng los metodos de una calculadora.
 * suma, rest, mult, division, promedio
 */

const Calculadora = {

  sumar: function(x, y){
    return x + y;
  },
  restar: function (x, y) {
    return x - y;
  },
  multiplicar: function(x, y){
    return x * y;
  },

  dividir: function(x, y){
    return x / y;
  },

  promediar: function(array){

    let acumulacion= 0;

    for (let i = 0; i < array.length; i++) {
      acumulacion = this.sumar(acumulacion, array[i])
    };

    return this.dividir(acumulacion, array.length);
  }

};

let resultadoPromedio = Calculadora.promediar([5, 10]);
console.log(resultadoPromedio);



