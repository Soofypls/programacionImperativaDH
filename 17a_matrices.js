/**
 * Recorrer fila 1 Recorremos los elementos de la fila elegida, con matriz[1].length, “medimos” la cantidad
de elementos de la fila.
 */

for (let i=0;i<matriz[1].length;i++){
    console.log(matriz[1][i]);}

/**
 * Recorrer columna 2 Recorremos los elementos de la columna elegida, con matriz.length, “medimos” la
cantidad de elementos de la columna, esto sería la cantidad de filas de la matriz.
 */

    for (let i=0;i<matriz.length;i++){
        console.log(matriz[i][2]);}

/**
 * Podemos recorrer la matriz completa recorriendo primero la fila 0, luego la 1 y así hasta
terminar con todas las filas.
 */



for (let fila=0;fila<matriz.length;fila++){
            for(let columna=0;columna<matriz[fila].length;columna++){
            console.log(matriz[fila][columna]);}
            
 }

/**
 * Ahora vamos a recorrer la matriz completa, recorriendo primero la columna 0, luego la 1 y
así hasta terminar con todas las columnas.
 */

 for (let columna=0;columna<matriz[0].length;columna++){
    for(let fila=0;fila<matriz[fila].length;fila++){
    console.log(matriz[fila][columna]);}}