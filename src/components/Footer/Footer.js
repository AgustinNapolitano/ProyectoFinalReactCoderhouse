import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div className="footer-main-container">
            <footer className="footer-container">
                <div className="icon-container">
                    <h2>Redes Sociales</h2>
                    <a target='_blank' href="https://www.linkedin.com/in/agustin-na/"> 
                    <FacebookIcon className="icon-fb"/>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/agustin-na/'>
                        <InstagramIcon className="icon-ig"/>
                    </a>
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer

//rrss no llevan a ningún lado