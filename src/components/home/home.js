import './home.css'
import Video from '../video/video'

const Home = () => {
  return (
    <div className="infoContainer">
      <div className="infoChild">
        <br></br>
        <Video />
        <br></br>
      </div>
      <div className="infoChild">
        <p>
          The Game of life is a zero player game developed in the 70's by John
          Horton Conway. Check out the{' '}
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
            Wikipedia article
          </a>{' '}
          for a full description. The evolving state of the game is determined
          by the initial configuration - some configurations become infinitely
          evolving constellations, others eventually evolve into a stable
          patterns, whilst others die off completely.
        </p>
        <p>The rules are as follows:</p>
        <p>
          The game evolves in turns, commonly known as 'ticks'. All changes
          occur at the same time. Any live cell with 2 or 3 live neighbours
          survives until next tick. Any live cell with less than 2 live
          neighbours dies (underpopulation). Any live cell with more than 3 live
          neighbours dies (overpopulation). Any dead cell with exactly 3
          neighbours becomes a live cell (reproduction).
        </p>
        <p>
          There are two popular ways of dealing with the edge of the board. One
          where if a cell is off the board it's considered dead. I like to think
          of this as death due to running out of space or being pushed out. The
          other is to make the edge of the board wrap around to the opposite
          side so the cell can keep living. I guess it's an earth is flat vs
          earth is round sort of thing... You can choose which game you would
          like to play by clicking the options above. Feel free to swap between
          the two types to see the difference whilst the simulation is running.
        </p>
      </div>
    </div>
  )
}

export default Home
