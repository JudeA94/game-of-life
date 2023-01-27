import './App.css';
import StartMenu from './components/startMenu/startMenu'
import Game from './components/game/game'
import Home from './components/home/home'
import NotFound from './components/notFound/notFound'
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

