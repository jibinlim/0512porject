import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/paul.jpg'

const Home = () => {
    return (  
        <div className="home" style ={{ backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Jibin's Game Park</h1>
                <p>
                <Link to="/nb">
                <button> BASEBALL </button>
                </Link>
                <Link to="/tictactoe">
                <button> TICTACTOE </button>
                </Link>
                <Link to="/gugudan">
                <button> GUGUDAN </button>
                </Link>
                </p>
            </div>
        </div>
    );
}
 
export default Home;