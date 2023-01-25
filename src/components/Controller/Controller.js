import './Controller.css'
import { useEffect, useState } from 'react'
const GameOfLife = require('../../Helpers/GameOfLife')

const Controller = ({ cellArray, setCellArray, columns, rows }) => {
  const game = new GameOfLife()
  const [isRunning, setIsRunning] = useState(false)
  const [refreshRate, setRefreshRate] = useState(1024)

  
  const next = () => {
    console.log(cellArray)
    const newCellArray = game.nextGrid(cellArray)
    setCellArray(newCellArray)
    console.log(cellArray)
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
    
  }

  const playPause = () => {
    setIsRunning(!isRunning)
  }

  const speedUp = () => {
    setRefreshRate(refreshRate/2)
  }

  const slowDown = () => {
    setRefreshRate(refreshRate*2)
  }

  const reset = () => {
    const blankGrid = game.resetGrid(rows, columns)
    setCellArray(blankGrid)
    setIsRunning(false)
    setRefreshRate(1024)
  }

  return (
    <div className="controller">
      <div className="controllerChild">
        <button className="button" onClick={random}>Random</button>
      </div>
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
    </div>
  )
}

export default Controller
