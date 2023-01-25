import './Game.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Controller from '../Controller/Controller'



const Game = () => {
  const { columns, rows } = useParams()
  const [cellArray, setCellArray] = useState([])
  
  useEffect(() => {
    let newCellArray = []
    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < columns; j++) {
        row.push(0)
      }
      newCellArray.push(row)
    }
    setCellArray(newCellArray)
  }, [columns, rows])
  
  const handleCellClick = (rowIndex, colIndex) => {
    let newCellArray = [...cellArray]
    newCellArray[rowIndex][colIndex] = 1
    setCellArray(newCellArray)
  }

  return (
    <>
    <div className="gameBoard">
      {cellArray.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div id="cell" className={cellArray[rowIndex][colIndex] === 0 ? 'dead' : 'alive'} key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}></div>
          ))}
        </div>
      ))}
    </div>
    <Controller cellArray={cellArray} setCellArray={setCellArray} columns={columns} rows={rows}/>
    </>
  )
}

export default Game
