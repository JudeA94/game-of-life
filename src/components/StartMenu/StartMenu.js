import './StartMenu.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const StartMenu = ( ) => {
  const navigate = useNavigate()
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(3)
  const [cellDimensions, setCellDimensions] = useState(10)

  const handleColumnsChange = (e) => {
    e.preventDefault()
    setColumns(e.target.value)
    setCellDimensions(500 / Math.max(columns,rows))
  }

  const handleRowsChange = (e) => {
    e.preventDefault()
    setRows(e.target.value)
    setCellDimensions(500 / Math.max(columns,rows))
  }

  const startGame = (e) => {
    e.preventDefault()
    navigate(`/play/${columns}/${rows}`)
    document.documentElement.style.setProperty('--cell-height', `${Math.floor(cellDimensions)}px`)
    document.documentElement.style.setProperty('--cell-width', `${Math.floor(cellDimensions)}px`)
  }

  return (
    <div className="menu">
      <div className="menuChild">
        <button className="button" onClick={() => navigate("/")}>Game information</button>
      </div>
      <div className="menuChild">
        <input type="range" id="width" name="width" min="3" max="100" value={columns} onChange={handleColumnsChange}></input>
        <label htmlFor="width">Width: {columns}</label>
      </div>
      <div className="menuChild">
        <input type="range" id="height" name="height" min="3" max="100" value={rows} onChange={handleRowsChange}></input>
        <label htmlFor="height">Height: {rows}</label>
      </div>
      <div className="menuChild">
        <button className="button" onClick={startGame}>Play</button>
      </div>
    </div>
  )
}

export default StartMenu
