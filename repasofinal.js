let numeros = [5, 2, 6, 1, 3]

const ejercicio1_ordenarNumerosMayorAMenorBubble=()=>{
    
const ordernar = (array, instruccion)=>{

let aux

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {   // (let j = 0; j < array.length -1 -i; j++) (con menos i es mejor)
       
            if (instruccion === "ASC") {
            
                if (array[j] > array[j+1]){
                aux = array[j]
                array[j]=array[j+1]
                array[j+1]=aux;

            } else if (instruccion === "DESC"){
                if (array[j] < array[j+1]){
                aux = array[j]
                array[j]=array[j+1]
                array[j+1]=aux;
            };    
        };   
    }; 

}
}
}
ordernar(numeros, "DESC");
console.log(numeros);
};

// ejercicio1_ordenarNumerosMayorAMenorBubble();

const ejercicio2_verificarSielArregloEstaOrdenadoBullean =()=>{






}
ejercicio2_verificarSielArregloEstaOrdenadoBullean();