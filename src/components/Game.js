import { useParams } from "react-router-dom";

const Game = () => {
  let { width, height } = useParams();

  return ( 
    <div className="gameBoard">
    'Game Board'
    {width}
    {height}

    </div>
   );
}
 
export default Game;