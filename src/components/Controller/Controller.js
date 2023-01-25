import './Controller.css'

const Controller = () => {

  const next= () => {

  }

  const play = () => {

  }

  const speedUp = () => {

  }

  const slowDown = () => {

  }
  
  const reset = () => {

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