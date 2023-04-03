// 

const numeros = [5, 12, 2, 40, 33, 2, 8];

const numeroMayor =()=>{
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] > numeros[mayor]){
        mayor = i;
    }
    
}

}
numeroMayor(numeros);
 console.log(`El número mayor es el ${mayor}`);