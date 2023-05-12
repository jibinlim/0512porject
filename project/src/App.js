import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nb from './pages/Nb'
import TicTacToe from './pages/TicTacToe';
import Footer from './components/Footer';
import Gugudan from './pages/Gugudan';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/nb" element = {<Nb />}/>
          <Route path = "/tictactoe" element = {<TicTacToe/>}/>
          <Route path = "/gugudan" element = {<Gugudan/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
