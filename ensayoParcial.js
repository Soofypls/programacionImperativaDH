const ejercicio1 =()=>{

let num = [12, 3, 24, 2, 3];

const encontrarMenor = (arr)=>{

    let menor = arr[0]
    let indice = 0;

    for (let i = 0; i < arr.length; i++){

        if(menor> arr[i]){
            menor=arr[i]
            indice = i

        }

    }
// let indice2 = arr.indexOf(menor)
    return `el numero menor es ${menor} que esta en la posicion ${indice}`

};

encontrarMenor(num);


}

ejercicio1();

// const ejercicio2=()=>{




// //
// Arrays
//  .push()
//  .pop()
//  .shift()
//  .unshift()
//  .join()
//  .indexOf()
//  .lastIndexOf()
//  .includes()

// Strings
//  nombre[2] // Accede al caracter en la posición 2 dentro de nombre
//  .length
//  .indexOf()
//  .slice()
//  .trim()
//  .replace()
//  .split()
//  .includes()
 //

// }
