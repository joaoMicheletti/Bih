import React from 'react';
import { Link } from 'react-router-dom';
import './notfound_style.css';
import Logo from '../assets/Logo.jpg'

function NotFound(){
    return(
        <div id='NotFaundContainer'>
            

            <div id='Content'>

                
                <img id='Logo_img' src={Logo} alt='logo'/>

                <p id='Code'></p>
                

                <p id='Sorry'>Sorry, page notfound!</p>
                <p id='Return' >Return to Home</p> 
                <Link id='Linkk'  to='/loja'>Click Here</Link>
                

            </div>
            
        </div>
    );

};
export default NotFound;