import React from "react"
import '../styles/Footer.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const Footer = () => {
    return ( 
        <div className = "footer">
            <div className="socialMedia">
                <SportsEsportsIcon/>
            </div>
            <p> &copy; Jibin's game park</p>
        </div>
     );
}
 
export default Footer;