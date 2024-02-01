import p from 'p5-sketch'
import LifeGame from './LifeGame.js'

/*
  EL JUEGO DE LA VIDA
  ===================
  Contexto:
  - 0: celda muerta, 1: celda viva
  
  Reglas:
  - Una celda muerta revive en el ciclo siguiente si tiene exactamente 3 vecinas vivas.
  - Una celda viva muere en el ciclo siguiente si tiene menos de 2 o más de 3 vecinas vivas.  
*/

let world = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

//datos que no van a cambiar
const canvasSize = 500
const cellSize = canvasSize/world.length

//inicializamos el juego
const lifeGame = new LifeGame(world)


p.setup = () => {
  p.createCanvas(500, 500)
  p.frameRate(10) // 10 frames por segundo
}


p.draw = () => {
  p.background('black')

  //clonamos el tablero, para irlo actualizando sin perder el estado actual
  const copyWorld = lifeGame.cloneBoard()

  //dibujamos el tablero de acuerdo a lo que haya en copyWorld
  for (let row = 0; row < copyWorld.length; row++) {
    for (let col = 0; col < copyWorld[row].length; col++) {
      //si la celda esta muerta, la pintamos de blanco
      if (copyWorld[row][col] == 0) {
        p.fill(255,255,255)
      }
      //si esta viva, de rojo
      else {
        p.fill(255,0,0)
      }
      p.rect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }

    //revisar los vecinos por celda y actualizamoas segun las reglas del juego
    for (let row = 0; row < copyWorld.length; row++) {
      for (let col = 0; col < copyWorld[row].length; col++) {
        
        //contamos los vecinos vivos de la celda actual
        let aliveNeighbors = lifeGame.countAliveNeighbors(row,col)
  
        //si la celda esta muerta
        if (copyWorld[row][col] == 0) {
          //y tiene exactamente 3 vecinos vivos
          if(aliveNeighbors == 3) {
            //cambiamos el estado de la celda a vivo
            copyWorld[row][col] = 1
          }
        }
        
        //si la celda esta viva
        else {
          //y tiene menos de dos vecinos vivos o mas de 3 vecinos vivos
          if(!(aliveNeighbors == 3 || aliveNeighbors == 2)) {
            //cambiamos el estado de la celda a muerta
            copyWorld[row][col] = 0 
          }
        }
      }
    }

    //como ya tenemos el nuevo estado del tablero actualizado en copyWorld, 
    //lo pasamos para actualizar el tablero real
    lifeGame.updateBoard(copyWorld)
}



