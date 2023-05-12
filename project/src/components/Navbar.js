import React, {useState} from "react";
import Logo from '../assets/gameicon.png';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className ="navbar">
            <div className="leftSide">
                <img src = {Logo}/>
                <Link to="/">Home</Link>
                <Link to="/nb">numbaseball</Link>
                <Link to="/tictactoe">tictactoe</Link>
                <Link to="/gugudan">gugudan</Link>
                </div> 
        </div>
    )
}
export default Navbar;