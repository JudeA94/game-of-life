import './App.css';
import StartMenu from './Components/StartMenu/StartMenu'
import Game from './Components/Game/Game'
import Home from './Components/home/Home'
import NotFound from './Components/NotFound/NotFound'
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">    
      <StartMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/:columns/:rows/:type" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;

