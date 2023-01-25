import './StartMenu.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const StartMenu = ( ) => {
  const navigate = useNavigate()
  const [width, setWidth] = useState(3)
  const [height, setHeight] = useState(3)
  // const [start, setStart] = useState(false)

  const handleWidthChange = (e) => {
    e.preventDefault()
    setWidth(e.target.value)
  }

  const handleHeightChange = (e) => {
    e.preventDefault()
    setHeight(e.target.value)
  }

  const startGame = (e) => {
    e.preventDefault()
    navigate("/play")
  }

  return (
    <div className="parent">
      <div className="child">
        <h1 className="main-title">Game of Life</h1>
      </div>
      <div className="child">
        <input type="range" id="height" name="height" min="3" max="10" onChange={handleHeightChange}></input>
        <label htmlFor="volume">Height: {height}</label>
      </div>
      <div className="child">
        <input type="range" id="width" name="width" min="3" max="10" onChange={handleWidthChange}></input>
        <label htmlFor="volume">Width: {width}</label>
      </div>
      <div className="child">
        <button onClick={startGame}>Start</button>
      </div>
    </div>
  )
}

export default StartMenu
