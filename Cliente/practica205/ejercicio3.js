'use strict';
/**
 * Descomponiendo el problema III: el sudoku
 * ----------------------------
 * PROGRAMA QUE CREA UN SUDOKU
 * ----------------------------
 */

//FUNCIONES
/**
 * Genera un sudoku base válido de 9x9
 */
function generarSudokuBase() {
    let sudoku = [];
    let base = [1,2,3,4,5,6,7,8,9];

    //Creamos la base desordenada del sudoku
    for (let i = 0; i < 9; i++) {
        let fila = [];
        for (let j = 0; j < 9; j++) {
            fila.push(base[(j + i*3 + Math.floor(i/3)) % 9]);
        }
        sudoku.push(fila);
    }

    return sudoku;
}

/**
 * Función que mezcla el sudoku y lo hace válido (no se repiten en los 3x3, no se repite horizontalmente y no se repite verticalmente)
 * @param {Array} sudoku 
 */
function mezclarSudoku(sudoku) {
    function intercambiarFilas(fila1, fila2) {
        //Hacemos una varial temporal para ir ordenando las filas poco a poco
        let temp = sudoku[fila1];
        sudoku[fila1] = sudoku[fila2];
        sudoku[fila2] = temp;
    }

    //Hacemos la misma función de las filas pero con columnas (comprobamos el mismo indice pero en otra posición del eje vertical)
    function intercambiarColumnas(col1, col2) {
        for (let i = 0; i < 9; i++) {
            let temp = sudoku[i][col1];
            sudoku[i][col1] = sudoku[i][col2];
            sudoku[i][col2] = temp;
        }
    }

    //Mezclar filas y columnas dentro de cada 3x3 de manera aleatoria generando numeros aleatorios cada vez (esto sirve para hacer que los cubos de 3x3 no tengan numeros repetidos dentro)
    for (let banda = 0; banda < 9; banda += 3) {
        for (let i = 0; i < 3; i++) {
            let f1 = banda + Math.floor(Math.random()*3);
            let f2 = banda + Math.floor(Math.random()*3);
            intercambiarFilas(f1, f2);

            let c1 = banda + Math.floor(Math.random()*3);
            let c2 = banda + Math.floor(Math.random()*3);
            intercambiarColumnas(c1, c2);
        }
    }
}

/**
 * Función que comprueba si un array tiene números repetidos
 * 
 * @param {Array} array
 */
function tieneRepetidos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Función que comprueba si un sudoku es válido
 * 
 * @param {Array} sudoku 
 */
function compruebaSudoku(sudoku) {
    // Comprobar filas
    for (let i = 0; i < 9; i++) {
        if (tieneRepetidos(sudoku[i])) return false;
    }

    // Comprobar columnas
    for (let col = 0; col < 9; col++) {
        let columna = [];
        for (let fila = 0; fila < 9; fila++) {
            columna.push(sudoku[fila][col]);
        }
        if (tieneRepetidos(columna)) return false;
    }

    // Comprobar bloques 3x3
    for (let bi = 0; bi < 9; bi += 3) {
        for (let bj = 0; bj < 9; bj += 3) {
            let bloque = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    bloque.push(sudoku[bi+i][bj+j]);
                }
            }
            if (tieneRepetidos(bloque)) return false;
        }
    }

    return true;
}

//MAIN
//Sudoku correcto
let sudoku = generarSudokuBase();
mezclarSudoku(sudoku);

//Mostrar sudoku con console.log
console.log("Sudoku generado:");
for (let i = 0; i < 9; i++) {
    console.log(sudoku[i]);
}

console.log("¿Sudoku válido?", compruebaSudoku(sudoku));

//Sudoku no válido
let sudokuIncorrecto = [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]];

//Mostrar sudoku con console.log
console.log("Sudoku generado:");
for (let i = 0; i < 9; i++) {
    console.log(sudokuIncorrecto[i]);
}

console.log("¿Sudoku válido?", compruebaSudoku(sudokuIncorrecto));
//FIN