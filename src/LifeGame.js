export default class LifeGame {

    //creamos un nuevo juego a partir de una matriz
    constructor(matrix) {
        this.gameboard = matrix
    }


    //metodo para clonar el tablero
    cloneBoard() {
        let copyGameBoard = []
        for(let i=0; i<this.gameboard.length; i++) {
            copyGameBoard[i] = this.gameboard[i].slice()
        }
        return copyGameBoard
    }

    //metodo para contar el numero de vecinos por celda
    countAliveNeighbors(row, col) {
        //inicializamos la variable de vecinos vivos
        let aliveNeighbors = 0

        //se busca desde el row anterior hasta el row siguiente
        for (let i = row-1; i <= row+1; i++) {
          //y desde la col anterior al col siguiente
          for (let j = col-1; j <= col+1; j++) {
            //se verifica que no se este saliendo de los limites del tablero
            if(i >= 0 && j >= 0 && i < this.gameboard.length && j < this.gameboard.length) {
              //se verifica que no estemos revisando la casillas con row = i y col = j
              if(!(i == row && j == col)) {
                //se hace el analisis de si el vecino es uno vivo o no
                //dependiendo de eso se actualiza la variable aliveNeighbors
                if (this.gameboard[i][j] == 1) {
                  aliveNeighbors++
                }
              }
            }
          }
        }
        //retornamos el numero de vecinos vivos de la celda
        return aliveNeighbors
    }

    //metodo para actualizar el gameboard desde una matriz
    updateBoard(matrix) {
        for (let i=0; i<this.gameboard.length;i++) {
            for (let j=0; j<this.gameboard.length;j++) {
                this.gameboard[i][j] = matrix[i][j]
            }
        }
    }
}