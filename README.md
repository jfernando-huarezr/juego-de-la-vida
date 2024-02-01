# Curso: Algoritmos & Estructura de Datos

## ISIL 2023-2

### Evaluacion Parcial 4 - El Juego de la Vida

#### Descripción

El Juego de la Vida, es un autómata celular concebido por el matemático británico John Horton Conway en 1970. Aunque es llamado "juego", es en realidad una simulación que opera sobre una grilla bidimensional de celdas cuadradas. Cada celda tiene dos posibles estados: viva o muerta. El estado de cada celda en un momento dado depende de su estado anterior y el de sus ocho vecinas, siguiendo dos reglas simples que imitan las condiciones para la vida y la muerte.

Las reglas son las siguientes:

1. Una celda muerta con exactamente tres vecinas vivas "nace" (es decir, se convierte en una celda viva).

2. Una celda viva con dos o tres vecinas vivas sigue viva; de lo contrario, muere debido a la soledad o la sobrepoblación.

El Juego de la Vida es interesante por su capacidad para mostrar cómo patrones complejos y comportamientos "vivos" pueden emerger de reglas muy simples. Es un ejemplo clásico de emergencia y auto-organización, y ha atraído un gran interés tanto de la comunidad científica como de la de los entusiastas de la informática.

#### Enunciado

**Se entrega:**

- Un proyecto Node que utiliza la librería p5.js.

- Se deberá programar el algoritmo principal dentro de la función draw(), el cual redibujará el estado del tablero en cada momento dado (se ha establecido un fps de 10 desde la función setup()).

- Un arreglo bidimensional world, de 20x20, con celdas vivas y muertas pre-establecidas.

**Se solicita:**

- (4 puntos) Implementar el algoritmo para cambiar el tablero de un estado previo a un estado siguiente, siguiendo las reglas mencionadas anteriormente.

- (5 puntos) Ya que no se debería modificar el arreglo world mientras se realizan los cálculos para el cambio de estado, y que tampoco se puede hacer una copia directa de un arreglo en Javascript; se debe programar la función cloneMatrix(matrix), el cual debe realizar un clonado de la matriz matrix y devolver la copia.

- (6 puntos) Para el proceso del cálculo de las reglas, implementar un algoritmo para contar la cantidad de vecinos vivos de una celda, llamada countNeighbors(row, col).

- (5 puntos) Finalmente, si se ha programado correctamente todo en la función draw(), se debería visualizar la animación.

![gif](/img/juego.gif "game of life")

Para comprobar la solución instalar los modulos con `npm install` y ejecutar `npm run build` y `npm run preview`. Ingresar a la direccion localhost que aparece en la terminal para ver la animación. Un video con la solucion explicada se encuentra en este [enlace](https://youtu.be/ZGkPwuEoXCs)
