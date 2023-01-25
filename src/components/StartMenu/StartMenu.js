import './StartMenu.css'
import { useState } from 'react'

const StartMenu = () => {

  const [width, setWidth] = useState(3)
  const [height, setHeight] = useState(3)


  const handleWidthChange = (e) => {
    e.preventDefault()
    setWidth(e.target.value)
  }

  const handleHeightChange = (e) => {
    e.preventDefault()
    setHeight(e.target.value)
  }

  return (
    <div className="parent">
      <div className="child">
        <h1 className="main-title">Game of Life</h1>
      </div>
      <div className="child">
        <input type="range" id="height" name="height" min="3" max="10" onChange={handleHeightChange}></input>
        <label for="volume">Height: {height}</label>
      </div>
      <div className="child">
        <input type="range" id="width" name="width" min="3" max="10" onChange={handleWidthChange}></input>
        <label for="volume">Width: {width}</label>
      </div>
      <div className="child">
        <button>Start</button>
      </div>
    </div>
  )
}

export default StartMenu
