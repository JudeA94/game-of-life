import './StartMenu.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const StartMenu = ( ) => {
  const navigate = useNavigate()
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(3)
  // const [start, setStart] = useState(false)

  const handleColumnsChange = (e) => {
    e.preventDefault()
    setColumns(e.target.value)
  }

  const handleRowsChange = (e) => {
    e.preventDefault()
    setRows(e.target.value)
  }

  const startGame = (e) => {
    e.preventDefault()
    navigate(`/play/${columns}/${rows}`)
  }

  return (
    <div className="menu">
      <div className="menuChild">
        <h1 className="main-title">Game of Life</h1>
      </div>
      <div className="menuChild">
        <input type="range" id="width" name="width" min="3" max="22" value={columns} onChange={handleColumnsChange}></input>
        <label htmlFor="width">Width: {columns}</label>
      </div>
      <div className="menuChild">
        <input type="range" id="height" name="height" min="3" max="22" value={rows} onChange={handleRowsChange}></input>
        <label htmlFor="height">Height: {rows}</label>
      </div>
      <div className="menuChild">
        <button className="button" onClick={startGame}>Play</button>
      </div>
    </div>
  )
}

export default StartMenu
