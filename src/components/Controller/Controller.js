import './Controller.css'
import { useEffect, useState } from 'react'
const GameOfLife = require('../../Helpers/GameOfLife')

const Controller = ({ cellArray, setCellArray, columns, rows }) => {
  const game = new GameOfLife()
  const [isRunning, setIsRunning] = useState(false)
  const [refreshRate, setRefreshRate] = useState(512)
  const [proportionFill, setproportionFill] = useState(30)
  const [error, setError] = useState(null)

  
  const next = () => {
    const newCellArray = game.nextGrid(cellArray)
    setCellArray(newCellArray)
  }

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setTimeout(next, refreshRate);
    } else {
      clearTimeout(intervalId);
    }
    return () => clearTimeout(intervalId);
  }, [isRunning, cellArray]);

  const random = () => {
    reset()
    cellArray = createRandomGrid()
    setCellArray(cellArray)
  }

  const createRandomGrid = () => {
    let randomCellArray = []
    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < columns; j++) {
        Math.random() < proportionFill/100 ? row.push(1) : row.push(0)
      }
      randomCellArray.push(row)
    }
    return randomCellArray
  }

  const playPause = () => {
    setIsRunning(!isRunning)
  }

  const speedUp = () => {
    if (isRunning) {
      if (refreshRate < 32) {
      setError('Maximum speed');
      setTimeout(() => setError(null), 500)
     } else {
      setRefreshRate(refreshRate/2)
    }
  }
  }

  const slowDown = () => {
    if (isRunning) {
      if (refreshRate > 8192) {
      setError('Minimum speed');
      setTimeout(() => setError(null), 500)
     } else {
      setRefreshRate(refreshRate*2)
    } 
     }
  }

  const reset = () => {
    const blankGrid = game.resetGrid(rows, columns)
    setCellArray(blankGrid)
    setIsRunning(false)
    setRefreshRate(512)
  }

  const handleProportionFillChange = (e) => {
    setproportionFill(e.target.value)
  }

  return (
    <div className="controller">
   
      <div className="controllerChild">
        <button className="button" onClick={next}>Next</button>
      </div>
      <div className="controllerChild">
        <button className="button" onClick={playPause}>{isRunning ? 'Pause' : 'Play'}</button>
      </div>
      <div className="controllerChild">
        <button className="button" onClick={speedUp}>Speed Up</button>
      </div>
      <div className="controllerChild">
        <button className="button" onClick={slowDown}>Slow down</button>
      </div>
      <div className="controllerChild">
        <button className="button" onClick={reset}>Reset</button>
      </div>
      <div className="controllerChild">
      <input type="range" id="proportionFill" name="proportionFill" min="10" max="100" value={proportionFill} onChange={handleProportionFillChange}></input>
        <label htmlFor="proportionFill">Percentage filled (approx): {proportionFill}</label>      </div>
      <div className="controllerChild">
        <button className="button" onClick={random}>Random</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Controller
