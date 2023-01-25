import './App.css';
import StartMenu from './components/StartMenu/StartMenu'
import Game from './components/Game'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">    
      <StartMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;

