import './Controller.css'
const GameOfLife = require("../../Helpers/GameOfLife")


const Controller = ( { cellArray, setCellArray, columns, rows } ) => {
  const game = new GameOfLife()
  const next= () => {
    console.log(cellArray)
    const newCellArray = game.nextGrid(cellArray)
    setCellArray(newCellArray)
    console.log(cellArray)
  }

  const play = () => {

  }

  const speedUp = () => {

  }

  const slowDown = () => {

  }
  
  const reset = () => {
    const blankGrid = game.resetGrid(rows, columns)
    setCellArray(blankGrid)
  }

  return ( 
    <div className="parent">
      <div className="child">
        <button onClick={next}>Next</button>
      </div>
      <div className="child">
        <button onClick={play}>Play</button>
      </div>
      <div className="child">
        <button onClick={speedUp}>Speed Up</button>
      </div>
      <div className="child">
        <button onClick={slowDown}>Slow down</button>
      </div>
      <div className="child">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
   );
}
 
export default Controller;