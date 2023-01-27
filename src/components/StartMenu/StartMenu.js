import './StartMenu.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const StartMenu = ( ) => {
  const navigate = useNavigate()
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(3)
  const [cellDimensions, setCellDimensions] = useState(window.sessionStorage.getItem('cellDimension'))

  useEffect(() => {
    if (window.sessionStorage.getItem('cellDimension')) {
      upDateCellSize()
    } 
  }, [])

  useEffect(() => {
    setCellDimensions(500 / Math.max(columns,rows))
  }, [columns, rows])

  const upDateCellSize = () => {
    document.documentElement.style.setProperty('--cell-height', `${Math.floor(cellDimensions)}px`)
    document.documentElement.style.setProperty('--cell-width', `${Math.floor(cellDimensions)}px`)
  }
  
  const handleColumnsChange = (e) => {
    e.preventDefault()
    setColumns(e.target.value)
  }

  const handleRowsChange = (e) => {
    e.preventDefault()
    setRows(e.target.value)
  }

  const startGame = (type) => {
    window.sessionStorage.setItem('cellDimension', cellDimensions)
    upDateCellSize()
    navigate(`/play/${rows}/${columns}/${type}`)
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
        <button className="button" onClick={() => startGame('flat')}>Play (earth is flat)</button>
      </div>
      <div className="menuChild">
        <button className="button" onClick={() => startGame('round')}>Play (earth is round)</button>
      </div>
    </div>
  )
}

export default StartMenu
