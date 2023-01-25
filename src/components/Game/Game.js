import './Game.css'
import { useParams } from 'react-router-dom'

const Game = () => {
  const { columns, rows } = useParams()
  console.log(columns, rows)
  let cellArray = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push(0)
    }
    cellArray.push(row)
  }

  const handleCellClick = (rowIndex, colIndex) => {
    console.log('hello', colIndex, rowIndex)
  }

  return (
    <div className="gameBoard">
      {cellArray.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className="cell" key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Game
