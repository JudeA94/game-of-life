import './Home.css'
import Video from '../Video/Video'


const Home = () => {
  return (
    <div className="infoContainer">
    <div className="infoChild">
      <br></br>
    <Video />
    <br></br>
    </div>
    <div className ="infoChild">
    The Game of life is a zero player game developed in the 70's by John Horton Conway. Check out the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia article</a> for a full description. The evolving state of the game is determined by the initial configuration - some configurations become infinitely evolving constellations, others eventually evolve into a stable patterns, whilst others die off completely. It is commonly used as a tech test as it can be solved in many different ways that clearly show the level of the programmer.

    <p>The Brief</p>
    <p>The rules are as follows:</p>

    The game evolves in turns, commonly known as 'ticks'.
    All changes occur at the same time.
    Any live cell with 2 or 3 live neighbours survives until next tick.
    Any live cell with less than 2 live neighbours dies (underpopulation).
    Any live cell with more than 3 live neighbours dies (overpopulation).
    Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).
    </div>
    </div>
  )
}

export default Home
