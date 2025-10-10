'use strict';
/**
 * Buscaminas
 * ----------------------------
 * PROGRAMA QUE RELLENA LAS BANDERAS DE UN TABLERO DE BUSCAMINAS
 * ----------------------------
 */

function calcularMinasAdyacentes(board) {
    const filas=board.length;
    const columnas=board[0].length;

    //Crear un tablero temporal rellenado todo con 0
    const resultado=[];
    for (let i=0;i<filas;i++) {
        resultado[i]=[];
        for (let j=0;j<columnas;j++) {
            resultado[i][j]=0;
        }
    }

    //Recorremos cada celda del tablero
    for (let i=0;i<filas;i++) {
        for (let j=0;j<columnas;j++) {
            if (board[i][j]===-1) {
                resultado[i][j]=-1;
            } else {
                let contador=0;

                //Indicamos el tamaño del tablero para no hacer calculos innecesarios (que solo calcule las posiciones que hagan falta)
                const filaInicio = (i===0) ? 0 : i-1;
                const filaFin = (i===filas-1) ? filas - 1 : i + 1;
                const colInicio = (j===0) ? 0 : j - 1;
                const colFin = (j===columnas-1) ? columnas - 1 : j + 1;

                //Recorremos el tablero ignorando indices negativos o que estén fuera del tamaño del tablero
                for (let x=filaInicio; x<=filaFin;x++) {
                    for (let y=colInicio;y<=colFin;y++) {
                        //Saltamos la celda actual para no sobreescribirla
                        if (x===i&&y===j) continue;
                        //Contamos la cantidad de minas que hay en las 8 casillas adyacentes
                        if (board[x][y]===-1) contador++;
                    }
                }

                resultado[i][j]=contador;
            }
        }
    }

    return resultado;
}

// MAIN
//Tablero del ejemplo
const tablero = [
    [-1, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0,-1, 0, 0],
    [ 0, 0, 0, 0]
];

const resultado = calcularMinasAdyacentes(tablero);
console.log(resultado);

//Tablero más dificil
const tablero2 = [
    [-1, 0, 0, -1],
    [ 0, 0, -1, 0],
    [ 0,-1, 0, 0],
    [ 0, 0, 0, 0]
];

const resultado2 = calcularMinasAdyacentes(tablero2);
console.log(resultado2);
